import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] flex items-center justify-center shadow-lg shadow-[var(--accent-blue)]/30">
              <span className="text-white font-bold text-3xl">L</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">灵慧开明兽</h1>
          <p className="text-[var(--accent-blue)]">灵慧光智 Lumina AI</p>
        </div>

        {/* Introduction */}
        <div className="card-tech mb-8">
          <h2 className="text-xl font-bold text-white mb-4">关于我</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            专注跨境电商AI Agent开发，致力于帮助卖家从手动运营转向智能自动化。
            <br /><br />
            我相信AI不是替代人工，而是放大人的能力。用工具获取数据，用AI做分析，用人做决策——这是智能运营的正确方式。
            <br /><br />
            在这个博客中，我将分享跨境电商AI实战经验，包括选品、客服、物流、广告等各个环节的自动化解决方案。
          </p>
        </div>

        {/* Skills */}
        <div className="card-tech mb-8">
          <h2 className="text-xl font-bold text-white mb-4">专业领域</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🤖', title: 'AI Agent开发' },
              { icon: '🎯', title: '选品自动化' },
              { icon: '💬', title: '客服系统' },
              { icon: '📦', title: '物流优化' },
              { icon: '📊', title: '广告策略' },
              { icon: '🔧', title: '工具集成' },
            ].map(skill => (
              <div key={skill.title} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-secondary)]">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm text-white">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="card-tech mb-8">
          <h2 className="text-xl font-bold text-white mb-4">服务范围</h2>
          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent-blue)]">✓</span>
              <span>AI Agent系统架构设计与开发</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent-blue)]">✓</span>
              <span>跨境电商自动化解决方案咨询</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent-blue)]">✓</span>
              <span>OpenClaw工具配置与技能定制</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent-blue)]">✓</span>
              <span>选品、客服、物流、广告自动化实施</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="glow-button inline-block px-8 py-3 rounded-lg text-white font-medium"
          >
            联系咨询
          </Link>
        </div>
      </div>
    </div>
  );
}