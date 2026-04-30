import { useState, useRef } from 'react';

const promptExamples = [
  {
    title: '商业海报：高端东方香水新品',
    image: '/lumina-ai-website/images/prompts/prompt-1.png',
    prompt: '请设计一张 3:4 竖版高端东方香水海报，品牌名为"寻迹 (TRAVERSE)"。风格定位为"极简禅意、空灵、电影感"。背景是半透明的磨砂夹丝玻璃，透出后方模糊的青苔石阶与晨雾。画面主体是一瓶圆润如鹅卵石的磨砂玻璃香水瓶，瓶身带有细微的水滴冷凝感，周围点缀着一枝挂着露水的白玉兰。海报中必须准确呈现以下文字：寻迹 幽兰半夏 东方木质调 限量版 此时此刻 慢嗅清欢 核心香调：白玉兰 / 沉香 / 苦橙叶 / 苔藓 寻香专柜：北京 SKP 1F / 上海恒隆 2F 2026.06.15 全球首发 底部小字：香味感官体验因人而异，请以实物为准。要求：文字排版采用极简主义的长文案竖排形式，字体使用纤细的宋体衬线体，具有高级杂志的留白感，避免任何廉价的叠加效果。',
  },
  {
    title: '文艺创意：现代诗歌书籍装帧',
    image: '/lumina-ai-website/images/prompts/prompt-2.png',
    prompt: '生成一张精装书籍的封面设计图，书名为《月亮被咀嚼之后》，作者：沈清。风格为"超现实主义插画 + 现代平面设计"。封面主体是一个被咬掉一角的月亮，切口处流淌出像银河一样的蓝色液体，背景是沉静的深蓝布纹纸材质。文字排版要求：书名《月亮被咀嚼之后》使用错落有致的艺术黑体，字间距宽大，带有凹凸压印的视觉效果。底部有一行小字：献给所有在深夜失眠的灵魂。封底折边露出条形码和定价：CNY 59.00。重点呈现布面纸张的纤维感、烫金文字的金属反光以及文字在粗糙材质上的物理压印逻辑。',
  },
  {
    title: '真实纪实：雨夜路边摊烟火气',
    image: '/lumina-ai-website/images/prompts/prompt-3.jpg',
    prompt: '生成一张极其真实的雨后深夜街头纪实照片。场景是南方城市老街的一个深夜炒粉摊，摊主是一位 50 岁左右、穿着蓝色围裙、满脸汗水的男子，正在大火颠锅，锅中火焰腾起，映照着他的侧脸。旁边站着两位刚下班的年轻人，一个穿着湿漉漉的透明雨衣，手里拿着折叠伞，正低头看微信，另一个正伸手接过打包盒。环境细节：路面大雨后的积水倒映着彩虹色的霓虹招牌"王记老伙计炒粉"，空气中弥漫着蓝色的烟雾与白色的蒸汽，不锈钢台面上的油渍闪烁着光，塑料椅子上挂着雨滴。要求：快门抓拍感，要有适度的运动模糊（火焰和翻炒动作），皮肤纹理、毛孔、汗水在强逆光下的表现要极其写实，杜绝"AI塑料感"。',
  },
  {
    title: '高质量人像生成',
    image: '/lumina-ai-website/images/prompts/prompt-4.png',
    prompt: 'A 22-year-old East Asian girl, round youthful face, large bright doe eyes with natural lashes, rosy cheeks, soft pink lip gloss, two-strand loose braids with baby hairs. Wearing a pastel lavender oversized hoodie. Background: blurred Japanese convenience store interior at night, neon light reflections adding color pops. Expression: playful, bubbly, genuinely happy. Aesthetic: Douyin/TikTok influencer portrait, soft beauty filter quality, warm skin tone, natural light. Photorealistic, 8K. 16:9',
  },
  {
    title: '直播场景生成',
    image: '/lumina-ai-website/images/prompts/prompt-5.png',
    prompt: '生成一张 15.6 英寸车载智能大屏的 UI 界面截图。主题为"未来驾驶模式"，背景是实时渲染的 3D 地图，显示车辆正行驶在西藏林芝的桃花大道上。UI 布局：左侧为状态栏，显示 剩余续航 820km、车速 65km/h、挡位 D；中央悬浮卡片显示正在播放的音乐：许巍 - 《蓝莲花》，带有动感的频谱波纹；右侧是空调控制区，显示 24℃、双区风向。底部有一排常用 Dock 栏，包含 导航、能量、车辆设置、影音、应用中心。要求：界面具备玻璃拟态效果（Glassmorphism），图标具有微妙的 3D 深度感，所有中文文字和数字必须极其锐利，光影效果要符合白天自然光照射在屏幕上的真实反光逻辑。',
  },
  {
    title: '高保真 UI：新能源车机交互系统',
    image: '/lumina-ai-website/images/prompts/prompt-6.png',
    prompt: '生成一张 15.6 英寸车载智能大屏的 UI 界面截图。主题为"未来驾驶模式"，背景是实时渲染的 3D 地图，显示车辆正行驶在西藏林芝的桃花大道上。UI 布局：左侧为状态栏，显示 剩余续航 820km、车速 65km/h、挡位 D；中央悬浮卡片显示正在播放的音乐：许巍 - 《蓝莲花》，带有动感的频谱波纹；右侧是空调控制区，显示 24℃、双区风向。底部有一排常用 Dock 栏，包含 导航、能量、车辆设置、影音、应用中心。要求：界面具备玻璃拟态效果（Glassmorphism），图标具有微妙的 3D 深度感，所有中文文字和数字必须极其锐利，光影效果要符合白天自然光照射在屏幕上的真实反光逻辑。',
  },
  {
    title: '社交平台：小红书风格家居探店',
    image: '/lumina-ai-website/images/prompts/prompt-7.jpg',
    prompt: '生成一张类似小红书博主发布的"我的梦情书房"照片。场景是一个阳光明媚的午后，书房靠窗的位置有一张中古樱桃木书桌，桌上放着一台白色复古打字机、一杯冒着热气的拿铁咖啡（带有心形拉花）和一本打开的画册。光影要求：百叶窗的光影均匀地洒在桌面上，形成有节奏的明暗条纹。窗外是模糊的绿植。桌角摆放着一盆郁郁葱葱的琴叶榕。画面质感：低对比度、高光温润、带有轻微的胶片颗粒感，像用 iPhone 拍摄后再经过精心调色。文字标签（Tag）效果：在图片合适位置浮现三个标签：#我的书桌、#治愈系、#中古风。',
  },
  {
    title: '角色设计：十六宫格职场众生相',
    image: '/lumina-ai-website/images/prompts/prompt-8.png',
    prompt: '生成一张十六宫格的人物头像合集，核心主题是"周一早上的办公室众生相"。十六个格子里分别是同一家公司的不同岗位职员，要求每个人的着装、神态、道具极其符合身份：1. 疯狂改稿的设计师（黑眼圈、凌乱头发、手拿压感笔）；2. 刚入职的实习生（局促、笑容生硬、挂着崭新工牌）；3. 刚健身完的老板（精神抖擞、拿着沙拉碗、穿始祖鸟外套）；4. 正喝第4杯咖啡的程序员（两眼无神、穿格子衬衫、背景是代码流）；...以此类推至 16 人。要求：画风统一，为写实商业摄影风格，每格下方配有一行清晰的中文岗位名称，重点测试在同一画面中生成 16 个各具特色、毫无 AI 重复感的真实人脸神态。',
  },
];

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
          model: 'gpt-image-2',
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
              使用 OpenAI <span className="text-[var(--accent-blue)]">gpt-image-2</span> 模型，输入描述即可生成图片
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
            <div ref={resultRef} className="card-tech mb-12">
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

        {/* Prompt Examples */}
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-2xl font-bold text-white mb-2">提示词示范</h2>
          <p className="text-[var(--text-muted)] mb-8">点击卡片可使用该提示词生成图片</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promptExamples.map((example, idx) => (
              <div
                key={idx}
                onClick={() => setPrompt(example.prompt)}
                className="card-tech cursor-pointer group overflow-hidden p-0"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-[var(--accent-blue)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                    {example.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
