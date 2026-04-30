import { useState, useRef } from 'react';

export default function ImageGen() {
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showKey, setShowKey] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const generateImage = async () => {
    if (!apiKey.trim()) {
      setError('请输入 OpenAI API Key');
      return;
    }
    if (!prompt.trim()) {
      setError('请输入图片描述');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-image-1',
          prompt: prompt,
          n: 1,
          size: '1024x1024',
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error?.message || `请求失败 (${response.status})`);
      }

      const data = await response.json();

      if (data.data?.[0]?.url) {
        setImageUrl(data.data[0].url);
      } else if (data.data?.[0]?.b64_json) {
        setImageUrl(`data:image/png;base64,${data.data[0].b64_json}`);
      } else {
        throw new Error('未收到图片数据');
      }

      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : '生成失败，请检查API Key和网络');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !loading) {
      e.preventDefault();
      generateImage();
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent-blue)] opacity-5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500 opacity-5 blur-[80px]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-purple-500 flex items-center justify-center shadow-lg shadow-[var(--accent-blue)]/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">AI 图片生成</h1>
            <p className="text-[var(--text-secondary)] text-lg">
              使用 OpenAI <span className="text-[var(--accent-blue)]">gpt-image-1</span> 模型，输入描述即可生成图片
            </p>
          </div>

          {/* API Key Input */}
          <div className="card-tech mb-6">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              OpenAI API Key
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="search-input pr-20"
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--accent-blue)] px-2 py-1 transition-colors"
              >
                {showKey ? '隐藏' : '显示'}
              </button>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              Key 仅在浏览器本地使用，不会发送到我们的服务器
            </p>
          </div>

          {/* Prompt Input */}
          <div className="card-tech mb-6">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              图片描述
            </label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="描述你想生成的图片，例如：一只穿着太空服的猫咪在月球上漫步，赛博朋克风格..."
              rows={4}
              className="search-input resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-[var(--text-muted)]">
                Enter 发送 / Shift+Enter 换行
              </span>
              <button
                onClick={generateImage}
                disabled={loading}
                className={`glow-button px-6 py-2.5 rounded-lg text-white font-medium text-sm flex items-center gap-2 ${
                  loading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    生成中...
                  </>
                ) : (
                  '生成图片'
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="card-tech border-red-500/50 bg-red-500/5 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Result */}
          {imageUrl && (
            <div ref={resultRef} className="card-tech">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">生成结果</h3>
                <a
                  href={imageUrl}
                  download="lumina-ai-image.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--accent-blue)] hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  下载图片
                </a>
              </div>
              <div className="rounded-lg overflow-hidden border border-[var(--border)]">
                <img
                  src={imageUrl}
                  alt={prompt}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3 break-all">
                Prompt: {prompt}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
