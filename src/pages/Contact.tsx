export default function Contact() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">联系我们</h1>
          <p className="text-[var(--text-secondary)]">咨询AI Agent解决方案，请通过以下方式联系</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WeChat */}
          <div className="card-tech">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">微信公众号</h3>
                <p className="text-sm text-[var(--text-muted)]">关注获取最新文章</p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)]">
              搜索「灵慧光智Lumina AI」关注公众号，获取跨境电商AI实战干货。
            </p>
          </div>

          {/* Email */}
          <div className="card-tech">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-blue)]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">电子邮件</h3>
                <p className="text-sm text-[var(--text-muted)]">商务咨询与合作</p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)]">
              lumina-ai@example.com
              <br />
              <span className="text-xs text-[var(--text-muted)]">请在邮件中简要说明您的需求</span>
            </p>
          </div>

          {/* GitHub */}
          <div className="card-tech">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <p className="text-sm text-[var(--text-muted)]">开源项目与代码</p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)]">
              github.com/lumina-ai
              <br />
              <span className="text-xs text-[var(--text-muted)]">查看OpenClaw相关工具</span>
            </p>
          </div>

          {/* Consulting */}
          <div className="card-tech">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-cyan)]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">咨询服务</h3>
                <p className="text-sm text-[var(--text-muted)]">AI Agent解决方案</p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)]">
              提供跨境电商AI Agent定制开发服务。
              <br />
              <span className="text-xs text-[var(--text-muted)]">选品、客服、物流、广告自动化</span>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="card-tech">
          <h2 className="text-xl font-bold text-white mb-6">快速咨询</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">您的需求</label>
              <select className="search-input">
                <option value="">请选择咨询类型</option>
                <option value="agent">AI Agent系统开发</option>
                <option value="product">选品自动化</option>
                <option value="service">客服系统</option>
                <option value="logistics">物流优化</option>
                <option value="ads">广告策略</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">详细说明</label>
              <textarea
                className="search-input min-h-[120px] resize-none"
                placeholder="请简要描述您的需求..."
              />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">联系方式</label>
              <input
                type="text"
                className="search-input"
                placeholder="邮箱或微信"
              />
            </div>
            <button
              type="submit"
              className="glow-button w-full py-3 rounded-lg text-white font-medium"
            >
              提交咨询
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}