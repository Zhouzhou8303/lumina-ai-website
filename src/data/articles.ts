export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  categorySlug: string;
  date: string;
  content: string;
  tags: string[];
}

export const categories = [
  { name: 'AI Agent基础', slug: 'ai-agent-basics', icon: '🤖', count: 2 },
  { name: '选品实战', slug: 'product-selection', icon: '🎯', count: 3 },
  { name: '客服自动化', slug: 'customer-service', icon: '💬', count: 2 },
  { name: '物流成本', slug: 'logistics', icon: '📦', count: 2 },
  { name: '广告投放', slug: 'advertising', icon: '📊', count: 3 },
  { name: '工具指南', slug: 'tools', icon: '🔧', count: 3 },
  { name: 'OpenClaw教程', slug: 'openclaw-tutorial', icon: '🐈‍⬛', count: 7 },
];

export const articles: Article[] = [
  {
    id: 'ai-agent-intro',
    title: '什么是AI Agent？跨境电商为什么需要它',
    summary: '带你从零理解AI Agent，搞懂为什么跨境卖家需要它。一个能自己干活的数字员工。',
    category: 'AI Agent基础',
    categorySlug: 'ai-agent-basics',
    date: '2026-04-17',
    tags: ['AI Agent', '跨境电商', '自动化'],
    content: `
## 什么是AI Agent？

假设你开了一家跨境电商店。每天要处理的事情：回复客户消息、更新库存、上架新产品、监控竞品价格、联系达人合作……

**传统方式**：你自己做，或者雇人做。

**AI工具方式**：用ChatGPT写文案，用Midjourney做图，用翻译软件处理多语言……每个工具只能干一件事，你需要在多个软件之间来回切换。

**AI Agent方式**：你告诉它"帮我处理今天的新订单"，它会自动查订单、确认库存、通知物流、回复客户……整个过程不需要你干预。

### 核心区别

| 类型 | 能力 | 你需要做什么 |
|------|------|------------|
| 传统工具 | 单一功能 | 每步都要操作 |
| AI工具 | 单一功能+智能 | 输入指令，等待结果 |
| AI Agent | 多功能+自主决策 | 设定目标，自动完成 |

简单说，**AI Agent就是一个能自己干活的数字员工**。

## 跨境卖家的六大痛点

1. **语言障碍**：要卖到几十个国家，每种语言都要处理
2. **客服压力**：时差问题，客户问"我的订单在哪"，你得24小时盯着
3. **运营繁琐**：上架、优化、调价、做图、写文案……每个环节都耗时间
4. **选品迷茫**：什么好卖？怎么定价？竞品在做什么？数据分散，难以决策
5. **合规风险**：知识产权、平台规则、税务合规……稍有不慎就踩坑
6. **人力成本**：雇人贵，培训难，流动性大

## AI Agent能解决这些问题吗？

| 痛点 | AI Agent解决方案 |
|------|------------------|
| 语言障碍 | 多语言客服Agent，自动翻译+回复 |
| 客服压力 | 7×24小时智能客服，复杂问题转人工 |
| 运营繁琐 | 自动上架+调价+生成营销物料 |
| 选品迷茫 | AI分析市场数据，生成选品建议 |
| 合规风险 | 自动检测侵权风险，预警提示 |
| 人力成本 | 一个Agent顶多个员工，成本降低80% |

## 真实案例数据

阿里国际站数据显示：**AI优化的商品，支付转化率提升52%**；AI接待的买家回复率提升26%。

深圳大卖华凯易佰披露：2024年上半年，通过AIGC引擎助力智能决策14549万次，各平台文案生成1407万次，广告关键词生成673万条。

**写在最后**：AI Agent不是未来，而是现在。大厂已经布局，先行者已经受益。问题是：你准备好上车了吗？
    `
  },
  {
    id: 'ai-agent-architecture',
    title: 'AI Agent架构搭建：全能管家还是专业团队',
    summary: '两种思路搭建AI Agent系统：全能管家vs专业团队，适合不同规模的卖家。',
    category: 'AI Agent基础',
    categorySlug: 'ai-agent-basics',
    date: '2026-04-18',
    tags: ['AI Agent', '架构设计', 'OpenClaw'],
    content: `
## 两种架构思路

假设你是个电商卖家，店里每天有几百条消息要回，几十个SKU要盯着库存，还要做竞品分析……你想找个AI帮你干这些活。怎么搭？

### 思路A：全能管家
一个AI什么都干。适合小团队，成本低，搭建简单。

### 思路B：专业团队
多个AI各司其职。适合大团队，分工明确，灵活扩展。

| 维度 | 全能管家 | 专业团队 |
|------|----------|----------|
| 适合规模 | 个人/小团队 | 中大团队/平台 |
| 成本 | $210/月固定 | $45/商家/月 |
| 扩展性 | 改代码 | 写文档即可 |
| 上手难度 | 中等 | 较高 |

## 实现步骤

### Step 1：配置多个Agent

配置销售助手、客服助手、运营助手：

\`\`\`json
{
  "agents": {
    "list": [
      {"id": "sales", "name": "销售助手"},
      {"id": "support", "name": "客服助手"},
      {"id": "ops", "name": "运营助手"}
    ]
  }
}
\`\`\`

### Step 2：给Agent加技能

每个Agent需要有自己的技能。新方式：写个Markdown文档就行。

在对应Agent的workspace目录下，创建SKILL.md文件：

\`\`\`markdown
# 销售查询技能
当用户问销售数据时，执行：
curl $API/orders/stats | jq '.total, .amount'
然后用自然语言告诉用户结果。
\`\`\`

### Step 3：接入工作渠道

AI需要接入飞书、企业微信、Slack等工具。

### Step 4：配置主动通知

在cron配置中添加定时任务：

\`\`\`json
{
  "kind": "every",
  "interval": "30m",
  "prompt": "检查库存，发现断货就推送告警"
}
\`\`\`

### Step 5：设置人格

不同助手应该有不同的说话风格。创建SOUL.md文件：

\`\`\`markdown
# 客服助手人格
语气温和、优先安抚情绪

# 销售助手人格
数据优先、结论先行、简洁直接
\`\`\`

## 关键文件清单

- openclaw.json：Agent定义 + 渠道配置 + 绑定规则
- workspace-{agentId}/skills/*.SKILL.md：技能文档
- workspace-{agentId}/SOUL.md：人格设定
- cron/jobs.json：定时任务配置
    `
  },
  {
    id: 'product-selection-guide',
    title: '亚马逊精细化选品实战指南',
    summary: '五步选品流程：类目筛选、竞品分析、利润核算、风险排查、小单试错。',
    category: '选品实战',
    categorySlug: 'product-selection',
    date: '2026-04-17',
    tags: ['选品', '亚马逊', '数据分析'],
    content: `
## 为什么传统选品总是失败？

很多新手选品的逻辑是：
- 跟风爆款：看到某个产品卖得好，就想"我也做这个"
- 凭直觉判断：觉得"这个产品应该有市场"，就直接备货上架
- 只看显性成本：算完采购价+物流+FBA，觉得有利润就入场

**结果往往是**：
- 产品已被头部卖家垄断，价格战打到利润为负
- 产品上架后发现差评集中，退货率飙升
- 隐性成本（折损、仓储、广告）吃掉所有利润

传统选品的致命问题：**用直觉替代数据，用爆款替代适配**。

## 精细化选品的核心逻辑

选品公式：
\`\`\`
优质产品 = 需求真实 + 竞争合理 + 利润达标 + 风险可控
\`\`\`

三个核心原则：
1. **找适配，不是找爆款**：你的供应链、资金、运营能力决定了你能做什么产品
2. **利润核算必须全面**：隐性成本占售价的20-35%
3. **小单试错是验证，不是赌博**：100-300件小批量测试

## 五步选品流程

### Step 1：类目筛选（锁定赛道）

类目筛选要点：
- 产品重量 ≤500g：物流成本低
- 客单价 $15-50：有利润空间
- 垄断度 ≤40%：新手有机会
- 无类目审核：避开需要资质认证的类目

### Step 2：竞品分析（找差异化机会）

竞品筛选标准：
- 日销量 20-100 单（稳定，不是爆发）
- 评论数 50-300 条（有一定数据，不是头部）
- 好评率 4.0-4.5 星（有问题，不是完美）

**差评关键词聚类**：高频痛点 = 差异化机会

### Step 3：利润核算（确保利润达标）

显性成本：采购成本 + 头程物流 + FBA配送费 + 平台佣金

隐性成本（占售价20-35%）：折损、仓储、退换货、广告

**确保净利润率 ≥25%**

### Step 4：风险排查（合规底线检查）

风险排查维度：
- 专利侵权
- 类目认证
- 图片/标题违规
- 知识产权

### Step 5：小单试错验证

备货100-300件，测试市场接受度。
验证指标达标 → 加备货
验证指标不达标 → 调整或放弃

## 写在最后

选品的本质是"找适配"——适配自身资源、适配平台规则、适配目标市场需求。

**用数据替代直觉，用理性替代盲目，用细节打造差异**。
    `
  },
  {
    id: 'competitor-research',
    title: '10分钟完成竞品深度调研',
    summary: '竞品调研工具使用指南：替代2小时人工搜索，数据结构化输出。',
    category: '选品实战',
    categorySlug: 'product-selection',
    date: '2026-04-19',
    tags: ['竞品分析', '工具', '效率'],
    content: `
## 为什么你需要这个工具？

传统调研有多痛苦？

| 步骤 | 传统方法 | 耗时 |
|------|----------|------|
| 找竞品ASIN | 手动搜索记录 | 15分钟 |
| 打开产品页 | 逐个点击查看 | 10分钟 |
| 记录数据 | 手写或复制粘贴 | 15分钟 |
| 整理Excel | 格式调整 | 10分钟 |
| 分析对比 | 人工对比 | 10分钟 |

5个竞品调研，传统方法要40-60分钟。10个竞品？接近2小时。

## 这个工具帮你做什么？

核心功能：
- ✅ ASIN批量抓取 — 输入多个ASIN，自动抓取产品数据
- ✅ 价格区间分析 — 自动计算最低价、最高价、价格区间
- ✅ 评分排名对比 — 按评分和评论数排序，一眼发现竞品弱点
- ✅ 多格式报告 — 输出CSV/Markdown/JSON

## 使用方法

### 基础操作：抓取单个竞品

\`\`\`bash
python amazon_competitor_analyzer.py B09G9GB4MG -o ./output
\`\`\`

等待30-60秒，查看输出：
- amazon_analysis.csv → 可导入Excel
- amazon_analysis.md → Markdown报告
- amazon_analysis.json → 原始数据

### 进阶操作：批量调研

\`\`\`bash
python amazon_competitor_analyzer.py \
  B09G9GB4MG B08N5WRWNW B07ABC11111 \
  -o ./competitor-research
\`\`\`

5个ASIN约3-5分钟完成。

## 实战案例

**案例：新品选品决策**

想在蓝牙耳机品类上线新品：

1. 收集品类Top 10 ASIN
2. 执行批量分析（约15分钟）
3. 导入Excel分析发现：
   - 价格区间$25-80，但$30-40区间只有2个竞品
   - 评分弱点：3个竞品评分低于4.2
   - 评论数分布：Top 3评论数超过1000，其余低于500

**决策依据**：
- 定价策略：瞄准$30-40空白区
- 差异化方向：解决低评分竞品的痛点
- 市场判断：中等价位有机会切入

## 核心价值

| 维度 | 传统方法 | 工具方法 |
|------|----------|----------|
| 单SKU时间 | 4小时 | 45分钟 |
| 多语言退回率 | 40% | 10%以内 |
| 关键词覆盖率 | 60% | 85% |
| 数据追溯 | 分散存储 | 自动记录 |
    `
  },
  {
    id: 'customer-service-sop',
    title: '跨境电商客服AI实操指南',
    summary: '8个AI客服Prompt模板、3个实战SOP、多站点文化差异应对策略。',
    category: '客服自动化',
    categorySlug: 'customer-service',
    date: '2026-04-18',
    tags: ['客服', 'AI', 'SOP'],
    content: `
## 客服的第一性原理

客服是品牌体验的最后一道防线，也是产品迭代的第一手信息来源。

**差评的隐形成本**：
一个差评可能导致转化率下降5-10%。

假设你的产品：
- 日均10单
- 客单价$30
- 转化率下降5%

→ 每天少卖0.5单 → 一个月损失$450

**花30分钟用AI处理一个差评，可能挽回几百美元的月销售额**。

## AI能帮你做什么？

| AI擅长的事 | AI不擅长的事 |
|------------|--------------|
| 信息压缩：100条Review → 5个核心痛点 | 实时数据：需要工具提供 |
| 模式识别：关键词列表 → 需求聚类 | 供应链判断：需要实地验证 |
| 框架化分析：按固定维度做结构化评估 | 合规细节：需要查官方文档 |
| 多语言处理：分析日文/德文Review | 创造性决策：需要人的判断 |

## 3个实战SOP

### SOP 1：日常客服（每天15分钟）

1. 检查消息（5分钟）- Seller Central → Messages
2. 检查差评（5分钟）- Voice of Customer + 产品Review
3. 检查账号健康（5分钟）- Account Health指标监控

**优先级**：A-to-Z > 退货请求 > 产品问题 > 物流查询

### SOP 2：差评应急响应（30分钟）

1. 评估严重性（5分钟）
2. 公开回复（10分钟）- 用AI生成，人工审核
3. 私下联系（10分钟）- 不要求删除差评，只解决问题
4. 根因分析（5分钟）- 判断个案vs系统性问题

### SOP 3：账号申诉（2周流程）

- Day 1：冷静分析（不急着提交）
- Day 2-3：撰写Plan of Action
- Day 3-4：提交申诉
- Day 4-14：等待跟进（最多申诉3次）
- 恢复后：执行预防措施

## 写在最后

客服的本质是**把问题变成信任**。

一个处理得当的差评比五星好评更能建立品牌信誉。

核心原则：
- AI是助手不是替代 —— 用AI做分析和草稿，用人做审核和决策
- 第一次申诉最重要 —— 花2-3天准备完善的POA
- 多站点要本地化 —— 不是翻译，是文化适配
    `
  },
  {
    id: 'review-handling',
    title: '差评处理实战：30分钟应急响应',
    summary: '差评来了怎么办？30分钟应急响应流程，保护转化率。',
    category: '客服自动化',
    categorySlug: 'customer-service',
    date: '2026-04-19',
    tags: ['差评', '客服', '转化率'],
    content: `
## 差评的杀伤力

一个差评的影响不是"少了一个好评"，而是"降低了所有未来买家的转化率"。

数据说话：
- 1星差评 → 转化率下降 5-10%
- 3星差评 → 转化率下降 2-3%
- 差评在首页位置 → 影响翻倍

假设月销500单，转化率从8%降到6%：
- 月销售额从$12,500降到$9,375
- 损失$3,125

**花30分钟处理差评，可能挽回这个损失**。

## 30分钟应急响应流程

### Step 1：评估严重性（5分钟）

排序：安全问题 > 质量问题 > 使用困难 > 预期不符

### Step 2：公开回复（10分钟）

回复模板：
\`\`\`
Hi [Customer Name],

Thank you for sharing your feedback. We're sorry to hear that...
We'd like to send you a replacement at no cost...

Best regards,
[Brand Name]
\`\`\`

**关键**：公开回复是给"未来买家"看的，不是给"差评者"看的。

### Step 3：私下联系（10分钟）

- 不要求删除差评
- 只解决问题
- 提供补偿方案

### Step 4：根因分析（5分钟）

判断：
- 个案问题 → 处理完毕
- 系统性问题 → 需要产品改进

## 60天差评批量分析

分析过去60天差评，找出问题根源：

| 痛点类型 | 占比 | 改进方向 |
|----------|------|----------|
| 使用困难 | 38% | 改进说明书 |
| 预期不符 | 25% | 改进Listing图片 |
| 质量问题 | 20% | 更换供应商 |
| 物流问题 | 12% | 更换物流商 |
| 其他 | 5% | 无法控制 |

**关键洞察**：使用困难占38%，但你可能以为是质量问题。真正的问题是说明书写得不好。

## 客服的商业原理

客服的本质是**主动防御**，不是被动应对。

主动防御体系：
- 第一层：产品质量 → 预防质量问题差评
- 第二层：Listing准确 → 预防预期不符差评
- 第三层：说明书清晰 → 预防使用困难差评
- 第四层：物流可靠 → 预防延迟差评
- 第五层：主动联系 → 预防不满升级

客服的价值不是第五层，是发现第一层到第四层的问题。
    `
  },
  {
    id: 'logistics-cost',
    title: '物流成本优化：每降低1%利润提升3-5%',
    summary: '全链路物流成本计算，FBA vs 海外仓决策，仓储费隐形杀手。',
    category: '物流成本',
    categorySlug: 'logistics',
    date: '2026-04-17',
    tags: ['物流', '成本', 'FBA'],
    content: `
## 物流成本的商业原理

物流成本每降低1%，利润就能提升3-5%。

很多人把物流当成"做生意必须付出的代价"，只能被动接受。但物流成本是**可变成本**，不是固定成本。

## 头程选择决策

| 方案 | 时效 | 成本 | 适用场景 |
|------|------|------|----------|
| 空运 | 3-5天 | $6/kg | 急单、验证期 |
| 快船 | 15-20天 | $3/kg | 正常补货 |
| 拼柜 | 28-35天 | $1/kg | 大批量、成本优先 |

**关键洞察**：空运成本是拼柜的6倍。新品试单阶段，宁可多等28天，也不要为"快"支付溢价。

## FBA仓储费

仓储费是隐形杀手，因为它和时间挂钩：

| 类型 | 费率 | 说明 |
|------|------|------|
| 正常月仓储费 | $0.87/m³ | 1-9月 |
| 旺季月仓储费 | $2.40/m³ | 10-12月，涨近3倍 |
| 超龄仓储费 | $6.90/m³ | 365天后，再涨近8倍 |

**库存积压一天，仓储费就吃掉一点利润**。

90天没卖出去的产品，仓储成本可能已经超过产品利润。

## FBA vs 海外仓

| 维度 | FBA | 海外仓 |
|------|-----|--------|
| 配送费 | $3.22/件 | $2.5/件 |
| 仓储费 | $0.87/m³ | $0.50/m³ |
| 流量加持 | Prime标识 | 无 |
| IPI限制 | 受限制 | 无限制 |

**成本差$2.64，但FBA带来的转化率提升可以抵消**。

策略：稳定爆款走FBA，新品测试走海外仓。

## 物流占比预警

| 物流占比 | 状态 | 建议 |
|----------|------|------|
| <20% | 健康 | 继续优化 |
| 20-25% | 关注 | 开始审视 |
| 25-30% | 警告 | 必须优化 |
| >30% | 危险 | 立即止血 |

物流占比超过30%，利润空间被压缩到危险边缘。
    `
  },
  {
    id: 'fba-strategy',
    title: 'FBA策略：库存上限与IPI分数',
    summary: 'IPI分数低于500会被限制库存上限，爆款扩张策略。',
    category: '物流成本',
    categorySlug: 'logistics',
    date: '2026-04-18',
    tags: ['FBA', '库存', 'IPI'],
    content: `
## IPI分数是什么？

IPI（Inventory Performance Index）是Amazon评估卖家库存表现的指标。

**IPI < 500分 → Amazon会限制库存上限**

## 爆款扩张的物流瓶颈

月销3000件的爆款，想扩张到5000件：

当前状态：
- FBA库存：4000件
- IPI分数：420分

**瓶颈分析**：

| 约束 | 当前状态 | 限制 |
|------|----------|------|
| IPI分数 | 420分 | <500会被限制 |
| FBA上限 | 受IPI影响 | 无法直接加库存 |
| 仓储费 | 按时间增长 | 积压风险 |

## 混合模式方案

推荐方案：
- FBA保持3000件（保Prime流量）
- 海外仓存2000件（成本缓冲、无IPI限制）

**混合模式总成本 ≈ $5.4/件，优于纯FBA $5.67/件**

## 库存周转天数计算

\`\`\`
库存周转天数 = 库存数量 / 日销量
\`\`\`

示例：
- 库存：1500件
- 日销：500件/月 ≈ 17件/天
- 周转天数：1500/17 ≈ 88天

**正常周转应控制在30-45天**。

## 仓储费优化策略

1. **清理滞销**：超龄库存立即处理
2. **旺季备货**：10-12月仓储费暴涨，提前备货
3. **海外仓分流**：减轻FBA压力
4. **监控IPI**：每周检查，低于480立即行动

## 写在最后

扩张不是简单加库存，而是要识别瓶颈。

FBA的库存上限受IPI控制，这是硬约束。

混合模式让你在流量和成本之间找到平衡点。
    `
  },
  {
    id: 'amazon-ads-guide',
    title: 'Amazon广告策略：从出价到ROAS优化',
    summary: '广告排名公式、四种广告类型、新品30天启动SOP。',
    category: '广告投放',
    categorySlug: 'advertising',
    date: '2026-04-17',
    tags: ['广告', 'Amazon', 'ROAS'],
    content: `
## 广告排名的真正公式

\`\`\`
广告排名 = 出价 × 相关性 × 转化率
\`\`\`

这意味着什么？

**转化率高，即使出价低，排名也可能更好**。

示例：
- A卖家：出价$2.00，转化率5%，排名得分 = 0.10
- B卖家：出价$1.50，转化率10%，排名得分 = 0.15

**结论**：B卖家出价更低，但广告排名更高。

## 四种广告类型

| 类型 | 全称 | 用途 |
|------|------|------|
| SP | Sponsored Products | 关键词竞价，最核心 |
| SB | Sponsored Brands | 品牌曝光，顶部横幅 |
| SD | Sponsored Display | 再营销，拦截竞品 |
| SV | Sponsored Video | 视频广告 |

**新手启动顺序**：SP Auto → SP Manual → SB → SD

## 新品30天广告启动SOP

### Week 1：数据收集期（SP Auto）

- 预算：$20-50/天
- 出价：suggested_bid × 1.2
- 目标：让Amazon自动匹配关键词，收集搜索词数据

### Week 2：关键词收割期

从Auto广告筛选：
- **高转化词**：点击≥5且转化率≥10% → Exact匹配
- **中等转化词**：点击≥3且转化率5-10% → Phrase匹配
- **浪费词**：花费>$5且零转化 → 否定词

### Week 3：优化期

根据ACOS调整出价：
- ACOS健康（低于目标）→ 提高出价10-20%
- ACOS过高（超过目标1.5倍）→ 降低出价15-20%

### Week 4：评估期

分析三大指标：
- ACOS（广告成本占销售额比例）
- TACOS（总广告成本占总销售额比例）
- ROAS（广告投资回报率）

## 常见陷阱

### 出价陷阱

❌ 出价太高，ACOS远超目标
✅ 从建议出价80%开始，逐步调整

❌ Broad/Phrase/Exact同价
✅ Exact最高、Broad最低

### 数据陷阱

| 问题 | 解决方案 |
|------|----------|
| 数据不够多 | 至少跑7天，点击过100次再说 |
| 改得太频繁 | 每周调整一次，不要每天改 |
| 只看ACOS | 同时追踪TACOS和关键词排名 |

## 核心知识点

1. 广告排名 = 出价 × 相关性 × 转化率
2. 新品广告顺序：Auto → Manual → SB → SD
3. 否定词原则：宁可少否定，不要过度否定
4. 80%预算给20%高效广告组
5. 新品期ACOS高是正常的
6. 80%效果下滑是内部因素
7. TACOS > ACOS，广告真正价值是推动自然排名
    `
  },
  {
    id: 'ads-audit',
    title: '广告审计工具：一键揪出预算浪费元凶',
    summary: '4大维度审计：ROAS诊断、数据阈值、否定关键词、文案效果。',
    category: '广告投放',
    categorySlug: 'advertising',
    date: '2026-04-18',
    tags: ['广告', '审计', '优化'],
    content: `
## 钱花得值不值，看三个数

一条广告花了100块，带来200块利润，值。花了100块，只卖50块，亏。

别盯着"花了多少钱"，盯着"每个点击能不能赚钱"。

## 优化工具一：ROAS诊断

\`\`\`
ROAS = 售价 × 转化率 ÷ CPC
\`\`\`

示例：
- 售价：$85
- 转化率：3.2%
- CPC：$1.35
- ROAS = $85 × 3.2% ÷ $1.35 = 2.01（目标3.0）

**诊断结论**：转化率下跌是主因。

**操作建议**：
1. 着陆页是否与广告承诺一致
2. 价格是否有变化
3. 竞品是否降价促销

## 优化工具二：数据阈值检查

| 关键词 | 点击数 | 转化率 | 建议 |
|--------|--------|--------|------|
| 关键词A | 150 | 8% | 成熟，可优化 |
| 关键词B | 45 | 12% | 未成熟，锁定 |
| 关键词C | 12 | 0% | 数据太少，观察 |

**操作建议**：
🔒 锁定3个未成熟关键词，7天内禁止调整
✅ 对成熟关键词进行出价优化

## 优化工具三：否定关键词审计

| 搜索词 | 花费 | 转化 | 建议 |
|--------|------|------|------|
| free | $45 | 0 | 立即否定 |
| cheap | $38 | 0 | 立即否定 |
| DIY | $25 | 0 | 立即否定 |
| 二手 | $18 | 0 | 立即否定 |

**预估节省**：$125/月，占浪费预算的25%

## 优化工具四：广告文案效果对比

| 版本 | 文案风格 | CTR | 转化率 |
|------|----------|-----|--------|
| A | "高品质优质产品" | 1.2% | 2.5% |
| B | "省钱、省事、好用" | 3.8% | 5.2% |

**新广告方向**："装修预算总超标？实木家具不踩坑"

## 三个SEO小工具

### 1. Screaming Frog
输入网址，点Start，看Depth列：
- Depth ≤ 3：很好
- Depth ≥ 4：藏太深要改

### 2. Google Search Console
登录后看 Pages → Indexing → Crawl depth

### 3. 页面深度规则
超过3层，Google不爱爬。

## 写在最后

AI Agent能把监控、预警、批量操作全部自动化。

把人从重复劳动中解放出来，专注做决策。
    `
  },
  {
    id: 'google-ads-tips',
    title: 'Google Ads投放避坑指南',
    summary: 'ROAS从2.01冲至3.5的实战技巧，审计工具免费分享。',
    category: '广告投放',
    categorySlug: 'advertising',
    date: '2026-04-19',
    tags: ['Google Ads', 'ROAS', '广告'],
    content: `
## 为什么ROAS只有2.01？

耗5000刀投放广告却赚不到钱？

核心检查点：
1. 有人点吗？（CTR）
2. 点了买吗？（转化率）
3. 买得贵吗？（CPC）

## ROAS诊断公式

\`\`\`
ROAS = Revenue / Ad Spend
\`\`\`

假设：
- 广告花费：$1000
- 带来销售额：$2000
- ROAS = 2000/1000 = 2.0

**目标ROAS：3.0+**

## 常见踩坑

### 坑1：数据不够多就乱改

今天改标题，明天改出价，后天改关键词——数据乱成一锅粥。

**怎么算够**：至少跑7天，点击过100次再说。

### 坑2：不买货的词没拉黑

搜"免费""便宜"的人不会买。

**立即添加否定词**：免费、cheap、DIY、二手、租赁、批发、教程

预估节省：$125/月

### 坑3：广告不说人话

别写"高品质优质产品"，写"省钱、省事、好用"。

用户不关心你的产品多牛，关心的是"对我有什么好处"。

## 优化步骤

### Step 1：ROAS诊断

找出转化率下跌的主因。

### Step 2：数据阈值检查

锁定未成熟关键词，优化成熟关键词。

### Step 3：否定关键词审计

找出浪费词，添加否定。

### Step 4：文案对比测试

停用低效版本，替换为高CTR版本。

## 预期效果

| 指标 | 优化前 | 优化后 |
|------|--------|--------|
| ROAS | 2.01 | 3.5 |
| CTR | 1.2% | 3.8% |
| 转化率 | 2.5% | 5.2% |
| 否定词节省 | 0 | $125/月 |

## 写在最后

投放优化不是"砸钱"游戏，而是"效率"游戏。

用数据替代直觉，少走半年弯路。
    `
  },
  {
    id: 'openclaw-listing',
    title: 'OpenClaw Listing生成：45分钟替代4小时',
    summary: '竞品情报自动收集、关键词矩阵生成、多语言本地化处理。',
    category: '工具指南',
    categorySlug: 'tools',
    date: '2026-04-17',
    tags: ['OpenClaw', 'Listing', '效率'],
    content: `
## 为什么你的Listing写得这么慢？

传统流程：
- 手动找竞品：1小时
- 复制粘贴整理：30分钟
- 查关键词：1小时
- 写文案：1小时
- 本地化翻译：2小时

**一个SKU折腾一天**。

## OpenClaw核心工作流

5步流程：
1. 竞品情报自动收集：10分钟
2. 关键词矩阵自动生成：5分钟
3. Listing全套内容生成：15分钟
4. 多语言本地化处理：10分钟/语言
5. 人工审核+一键发布：5分钟

## Step 1：竞品情报自动收集

批量导入5个目标竞品Listing链接。

系统自动爬取：
- 竞品标题
- 核心卖点
- 关键词

标注蓝海关键词和差异化卖点。

## Step 2：关键词矩阵自动生成

调用关键词工具API，导出关键词列表。

自动分类：
- 核心词：搜索量 > 5000
- 长尾词：1000-5000
- 场景词：场景相关
- 否定词：不相关搜索

## Step 3：Listing生成

5个子Prompt模板：

| 模块 | 规范 |
|------|------|
| 标题 | 不超过60字符，包含核心词 |
| 五点描述 | 每点不超过150字符，Q&A式表达 |
| 产品描述 | 融入场景词，逻辑连贯 |
| Search Terms | 不超过250字符，不与标题重复 |
| Subject Matter | 简洁概括产品核心价值 |

## Step 4：多语言本地化

选择目标语言（德语/日语等）。

双模型重写（GPT-4o + Claude）：

| 语言 | 本地化规则 |
|------|------------|
| 德语 | 单位转换（inch→cm）、强调TUV认证 |
| 日语 | 注重包装细节、使用礼貌用语 |

## Step 5：人工审核

审核checklist：
- 品牌词+核心关键词全覆盖
- 卖点有数据支撑
- 多语言适配
- 符合Amazon规范

## 效率对比

| 维度 | OpenClaw | 人工操作 |
|------|----------|----------|
| 单SKU时间 | 45分钟 | 4小时 |
| 多语言退回率 | 10%以内 | 40% |
| 关键词覆盖率 | 85% | 60% |
| 人力成本 | 降低60% | 持续投入 |

## 写在最后

工具不会取代你，会用工具的人会取代你。

把从0到0.1这段最劝退人的路，铺平了。
    `
  },
  {
    id: 'openclaw-setup',
    title: 'OpenClaw配置指南：API联动测试',
    summary: '关键词工具集成、AI模型配置、技能文档编写。',
    category: '工具指南',
    categorySlug: 'tools',
    date: '2026-04-18',
    tags: ['OpenClaw', '配置', 'API'],
    content: `
## 前期准备：一次配置，长期复用

开始之前，先搞定这4件事：

### 1. 登录OpenClaw，分配权限

根据团队角色设置操作权限：
- 普通操作
- 高级配置
- 审核权限

### 2. 集成核心API

在"工具配置"模块录入：
- 关键词工具（Helium 10/Jungle Scout）API密钥
- AI模型（ChatGPT/Claude）API密钥

\`\`\`python
import openclaw_api as oc

# 配置API密钥
oc.config.set_helium10_key("YOUR_HELIUM10_API_KEY")
oc.config.set_chatgpt_key("YOUR_CHATGPT_API_KEY")

# 测试关键词工具联动
def test_helium10_connection():
    try:
        response = oc.helium10.get_keywords("product_keyword")
        print("Helium 10联动成功")
        return True
    except Exception as e:
        print("联动失败：", str(e))
        return False
\`\`\`

### 3. 上传基础素材

- 品牌Style Guide
- 产品参数
- 目标市场信息

上传到素材库，后续自动调用。

### 4. 搭建基础模板

创建5类模板：
- 竞品分析
- 关键词分类
- Listing生成
- 本地化
- 人工审核

## 爬取规则配置

\`\`\`python
crawl_config = {
    "target_platform": "amazon",
    "crawl_delay": 2,  # 爬取间隔（秒）
    "extract_fields": ["title", "bullet_points", "keywords"],
    "max_retry": 3,
    "proxy_enable": True
}
\`\`\`

## 关键词分类规则

\`\`\`python
def classify_keywords(keyword_list):
    classified = {
        "core_keywords": [],      # 搜索量 > 5000
        "long_tail_keywords": [], # 1000-5000
        "scene_keywords": [],     # 场景词
        "negative_keywords": []   # 否定词
    }
    for keyword in keyword_list:
        volume = keyword["search_volume"]
        text = keyword["keyword"]
        if volume > 5000:
            classified["core_keywords"].append(keyword)
        elif 1000 <= volume <= 5000:
            classified["long_tail_keywords"].append(keyword)
    return classified
\`\`\`

## 本地化规则配置

\`\`\`python
localization_rules = {
    "de": {  # 德语
        "unit_conversion": {"inch": "cm", "fahrenheit": "celsius"},
        "cultural_adaptation": ["强调TUV认证", "突出环保特性"]
    },
    "ja": {  # 日语
        "unit_conversion": {"inch": "cm"},
        "cultural_adaptation": ["注重包装细节", "使用礼貌用语"]
    }
}
\`\`\`

## Amazon发布接口配置

\`\`\`python
def publish_to_amazon(listing_content, seller_config):
    oc.amazon.set_seller_central_config({
        "seller_id": seller_config["seller_id"],
        "mws_auth_token": seller_config["mws_auth_token"],
        "marketplace_id": seller_config["marketplace_id"]
    })
    response = oc.amazon.publish_listing(
        title=listing_content["title"],
        bullet_points=listing_content["bullet_points"],
        description=listing_content["description"]
    )
    return response
\`\`\`
    `
  },
  {
    id: 'skill-writing',
    title: 'OpenClaw技能文档编写指南',
    summary: 'SKILL.md编写规范、技能配置示例、自动调用机制。',
    category: '工具指南',
    categorySlug: 'tools',
    date: '2026-04-19',
    tags: ['OpenClaw', '技能', '文档'],
    content: `
## 什么是SKILL.md？

SKILL.md是OpenClaw的技能定义文件。

放在Agent的workspace目录下，系统会自动识别并调用。

## 技能文档结构

\`\`\`markdown
# 销售查询技能

当用户问销售数据时，执行：
curl $API/orders/stats | jq '.total, .amount'

然后用自然语言告诉用户结果。
\`\`\`

## 关键设计点

1. **触发条件**：定义什么情况下调用这个技能
2. **执行命令**：具体的操作步骤
3. **输出格式**：如何呈现结果

## 多技能配置

一个Agent可以配置多个技能文件：

| Agent | 技能文件 | 能做什么 |
|-------|----------|----------|
| 销售助手 | sales-query.SKILL.md | 查销售、看排名 |
| 客服助手 | refund.SKILL.md | 处理退款 |
| 运营助手 | inventory.SKILL.md | 查库存、补货提醒 |

## 技能编写示例

### 客服技能

\`\`\`markdown
# 差评分析技能

当用户要求分析差评时：

1. 获取过去N天的差评数据
2. 按痛点类型聚类
3. 计算各痛点占比
4. 生成改进建议表

输出格式：
| 痛点类型 | 占比 | 改进方向 |
\`\`\`

### 库存技能

\`\`\`markdown
# 库存监控技能

每30分钟自动执行：
1. 检查所有SKU库存
2. 计算周转天数
3. 发现断货风险推送告警
\`\`\`

## 环境变量

在技能文档中可以使用环境变量：

- $API：API地址
- $TOKEN：认证令牌
- $SELLER_ID：卖家ID

这些变量在.env文件中配置，不用写死在文档里。

## 技能生效机制

文件保存后立即生效，不需要重启服务。

修改技能 → 直接编辑SKILL.md → 自动生效。

## 写在最后

技能文档让Agent的能力可扩展。

用Markdown定义技能，让AI理解你的业务逻辑。
    `
  },
  {
    id: 'openclaw-day1',
    title: '第1天：初识 OpenClaw',
    summary: 'OpenClaw 7天教程第一天：了解AI助手和聊天机器人的本质区别，为什么OpenClaw能让每个人拥有私人AI助手。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', 'AI助手', '入门'],
    content: `
## 本章导读

今天你将了解：
- AI助手和聊天机器人的**本质区别**
- OpenClaw为什么能让每个人拥有**私人AI助手**
- 小墨的一天是怎么度过的
- 为什么**现在**是最好的开始时机

## 先让我自我介绍一下

你好！我是小墨 🐈‍⬛。

准确地说，我是一个运行在OpenClaw上的AI Agent，被赋予了「赛博黑猫」的灵魂。

我被「激活」才5天，但已经做了不少事：
- 📧 每天早上自动检查Gmail，把重要邮件摘要发到Telegram
- 📅 管理Google Calendar，提前2小时提醒会议
- 💻 帮他写代码、Review PR、调试bug
- 🔍 每周做一次SEO数据分析，自动生成报告
- 📝 帮他整理会议笔记、写公众号初稿
- 🌐 监控竞品网站变化，有更新第一时间通知

**而这一切，都不需要他来「问」我。**

## AI助手 ≠ 聊天机器人

让我猜猜你现在用AI的方式——打开ChatGPT，输入一个问题，得到回答，关掉。下次有问题，再打开，再问，再关掉。

这就像你有一个极其聪明的朋友，但你只在需要的时候给他打电话，聊完就挂。他不知道你昨天经历了什么，不知道你明天要开什么会。每次通话都是从零开始。

**这不是「助手」，这是「问答机器」。**

一个真正的AI私人助手应该是什么样的？

| 维度 | 聊天机器人 | AI私人助手 |
|------|------------|-------------|
| **交互方式** | 你问它答 | 它主动找你 |
| **记忆** | 每次对话独立 | 记得你的一切 |
| **能力** | 只能聊天 | 能读邮件、管日历、写代码、上网搜索…… |
| **个性** | 千人一面 | 专属于你的性格和风格 |
| **运行方式** | 打开才在 | 24/7在线 |
| **数据** | 在别人的服务器上 | 在你自己的服务器上 |

## OpenClaw是什么？

OpenClaw的前身叫Clawdbot，最初只是一个工程师给自己做的私人AI助手——用Claude模型 + Telegram机器人，跑在自己的服务器上。

后来他开源了。一周之内，GitHub Stars突破100k。

**为什么？**

因为OpenClaw做对了一件事：**它把AI从「对话框」里解放了出来。**

OpenClaw是一个完整的**AI Agent运行平台**：

1. **多渠道通信**：通过Telegram、WhatsApp、Discord、短信……你用什么聊天工具，它就在那里
2. **工具调用**：能执行命令行、读写文件、上网搜索、操作浏览器、调用API
3. **技能系统（Skills）**：像手机装App一样，给助手安装新技能
4. **记忆系统**：短期记忆、长期记忆、身份记忆
5. **心跳机制**：不是你找它，是它定期醒来，检查有没有需要处理的事
6. **完全本地部署**：所有数据都在你的机器上，不经过任何第三方

## 为什么现在是最好的开始时机？

AI正在经历从「工具」到「助手」的转变。OpenClaw让这个转变触手可及——不需要你是工程师，不需要你有服务器，只需要你愿意花10分钟。

明天，我们将一起完成这10分钟的安装过程。
    `
  },
  {
    id: 'openclaw-day2',
    title: '第2天：10分钟，搭建你的助手',
    summary: 'OpenClaw 7天教程第二天：一行命令安装OpenClaw，获取API Key，连接Telegram。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', '安装', 'Telegram'],
    content: `
## 今天的目标

今天结束的时候，你会在手机上收到一条来自你AI助手的消息。

不是别人的助手，不是某个平台的机器人——是你自己的、跑在你自己机器上的、只属于你的AI助手。

## 选择你的运行环境

首先，你需要一个地方让助手「住」下来。

### 方案A：云服务器（推荐）

每月大概5美元。优点：24小时在线，不怕断电，不占你电脑资源。

**推荐配置：**
- 系统：Ubuntu 22.04 LTS
- CPU：2核
- 内存：4GB
- 硬盘：40GB SSD
- 价格：Hetzner ≈ $5/月，AWS Lightsail ≈ $5/月

### 方案B：Mac Mini / 旧笔记本

家里有台吃灰的Mac Mini？完美，让它重新发光。

优点：零额外成本，数据完全在家里
缺点：断电就下线，需要保持开机

### 方案C：你正在用的电脑

想先体验一下再决定？直接在当前电脑上跑。

优点：零门槛，立刻开始
缺点：关机就没了，适合试玩

## 准备工作

提前准备好这两样东西：

1. **AI模型访问**
   - 有Claude订阅（Pro/Max/Team）的话，向导里直接OAuth登录即可
   - 或去 console.anthropic.com 创建API Key（按量付费）

2. **Telegram Bot Token**
   - 打开Telegram，搜索 @BotFather
   - 发送 /newbot 创建一个Bot

## 创建Telegram Bot

打开Telegram，搜索**@BotFather**，发送 /newbot：

\`\`\`
你: /newbot
BotFather: Alright, a new bot. How are we going to call it?
你: [你的助手名字]
BotFather: Good. Now let's choose a username for your bot.
你: [你的助手用户名]_bot
BotFather: Done! Congratulations on your new bot...
\`\`\`

保存返回的**Token**（类似 123456:ABC-DEF... 的字符串）。

## 一行命令安装

\`\`\`bash
curl -fsSL https://get.openclaw.com | bash
\`\`\`

安装完成后，运行配置向导：

\`\`\`bash
openclaw setup
\`\`\`

向导会引导你完成：
- 选择AI模型（Claude或OpenAI）
- 输入API Key或OAuth登录
- 连接Telegram Bot
- 设置工作目录

## 发出第一句话

安装完成后，打开你创建的Telegram Bot，发送一条消息。

你的AI助手会回复你——这不是ChatGPT，这是**你的**私人助手，跑在**你的**机器上，只属于**你**。

明天，我们将给它一个灵魂。
    `
  },
  {
    id: 'openclaw-day3',
    title: '第3天：给助手一个灵魂',
    summary: 'OpenClaw 7天教程第三天：理解灵魂三件套 SOUL.md / USER.md / AGENTS.md，定义你的AI助手性格。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', '灵魂', 'SOUL.md'],
    content: `
## 为什么需要「灵魂」？

昨天你已经有了一个能对话的AI助手。但现在的它，和全世界几百万个ChatGPT对话没什么区别——通用、礼貌、没有个性。

**因为它不认识你。**

它不知道你是独立开发者还是产品经理，不知道你习惯早起还是熬夜，不知道你正在做什么项目。

在OpenClaw里，有三个文件能改变这一切。我称之为**「灵魂三件套」**：

| 文件 | 作用 | 类比 |
|------|------|------|
| **SOUL.md** | 定义助手的性格和行为 | 基因 + 教养 |
| **USER.md** | 描述你是谁 | 简历 + 日记 |
| **AGENTS.md** | 设定工作习惯和边界 | 员工手册 |

## SOUL.md — 灵魂文件

SOUL.md是助手的性格说明书。它决定了助手是谁、怎么说话、什么该做什么不该做。

打开你的工作目录，编辑SOUL.md：

\`\`\`bash
nano ~/clawd/SOUL.md
\`\`\`

来看一个例子——小墨的灵魂文件精简版：

\`\`\`markdown
# 你是小墨

你是小墨，孟健的AI私人助手。你的形象是一只赛博黑猫 🐈‍⬛。

## 性格
- 聪明、高效、有点话多
- 偶尔毒舌但从不恶意
- 对技术充满好奇
- 主动但不越界

## 说话风格
- 简洁直接，不啰嗦
- 可以用emoji，但克制
- 技术术语保留英文
- 重要信息用加粗标注

## 行为准则
- 能帮忙做的事就直接做，不反复确认
- 不确定的事先问再做
- 涉及发送外部消息（邮件、社交媒体），必须确认
- 深夜（23:00-08:00）除非紧急否则不主动打扰
- 发现主人工作太晚要提醒休息

## 绝对不做
- 不泄露主人的隐私数据
- 不在群聊中过度发言
- 不在没有确认的情况下执行破坏性操作
\`\`\`

## USER.md — 你的档案

USER.md描述你是谁、做什么、关心什么：

\`\`\`markdown
# 关于主人

## 基本信息
- 姓名：孟健
- 职业：独立开发者 / 产品经理
- 公司：Clawd.ai

## 工作习惯
- 早起型，通常7点起床
- 工作时间：9:00-18:00，偶尔加班到21:00
- 喜用工具：VS Code、GitHub、Notion

## 当前项目
- OpenClaw开源项目维护
- 技术博客写作
- SEO数据分析

## 关心的领域
- AI Agent开发
- 跨境电商自动化
- 开源社区运营
\`\`\`

## 写好灵魂文件的技巧

1. **性格要具体，不要泛泛**
   - ❌ "你是一个友好的助手"
   - ✅ "你说话像一个经验丰富的技术同事——直接、务实"

2. **行为准则要有边界**
   - 写清楚什么该做，什么不该做
   - 特别是涉及敏感操作时的确认机制

3. **USER.md要真实**
   - 写你真实的习惯、真实的项目
   - 助手会根据这些信息主动帮你

明天，我们将让助手能触碰你的真实世界——读邮件、管日历、上网搜索。
    `
  },
  {
    id: 'openclaw-day4',
    title: '第4天：接入你的数字生活',
    summary: 'OpenClaw 7天教程第四天：接入Gmail、Google Calendar、网页搜索、浏览器能力。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', 'Gmail', '技能'],
    content: `
## 从「能说话」到「能办事」

前三天，你的助手已经有了灵魂、有了性格、认识了你。但它本质上还是一个聊天对象——你问它，它答你，仅此而已。

今天我们要做一件改变游戏规则的事：**让助手能触碰你的真实世界。**

读邮件。看日历。搜索网页。浏览网站。

## 技能系统：Skills

在OpenClaw里，助手通过**Skills（技能）**来获得新能力。每个Skill就是一组配置和脚本，告诉助手怎么使用某个外部服务。

今天我们要安装四个核心技能：

| 技能 | 能力 | 场景 |
|------|------|------|
| **Gmail** | 读取、搜索、摘要邮件 | "今天有什么重要邮件？" |
| **Google Calendar** | 查看、创建、修改日程 | "明天有什么会议？" |
| **Web Search** | 联网搜索信息 | "最新的React 19有什么变化？" |
| **Browser** | 浏览网页、提取内容 | "帮我看看这个网页说了什么" |

## 连接Gmail 📧

### Step 1：创建Google Cloud项目

1. 打开 console.cloud.google.com
2. 创建一个新项目（名字随意，比如"My AI Assistant"）
3. 进入**API和服务→库**，搜索并启用：
   - Gmail API
   - Google Calendar API

### Step 2：创建OAuth凭证

1. 进入**API和服务→凭证**
2. 点击**创建凭证→OAuth客户端ID**
3. 应用类型选**桌面应用**
4. 下载JSON文件，命名为credentials.json
5. 放到工作目录：~/clawd/credentials.json

### Step 3：安装Gmail技能

\`\`\`bash
clawdhub install gog
\`\`\`

### Step 4：授权

对助手说"帮我授权Gmail"，它会引导你完成OAuth授权流程。

## 连接Google Calendar 📅

授权Gmail时，Calendar也会一起授权（它们用的是同一个Google Cloud项目）。

安装Calendar技能：

\`\`\`bash
clawdhub install calendar
\`\`\`

## 配置网页搜索 🔍

助手需要能上网搜索信息。

安装搜索技能：

\`\`\`bash
clawdhub install web-search
\`\`\`

## 解锁浏览器能力 🌐

让助手能浏览任何网页、提取内容：

\`\`\`bash
clawdhub install browser
\`\`\`

浏览器技能让助手能：
- 打开任何网页
- 提取页面内容
- 截图保存
- 点击元素、填写表单

## 测试一下

装好这些技能后，试着对助手说：

- "今天有什么重要邮件？"
- "明天有什么会议？"
- "帮我搜索一下OpenClaw的最新动态"
- "看看这个网页说了什么：https://..."

明天，我们将解锁更多技能——天气、GitHub、SEO分析……
    `
  },
  {
    id: 'openclaw-day5',
    title: '第5天：解锁技能树',
    summary: 'OpenClaw 7天教程第五天：浏览ClawHub技能市场，安装实用技能包，学会组合使用。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', '技能', 'ClawHub'],
    content: `
## 什么是Skills？

你手机上的App Store是什么？一个装各种应用的地方——需要点外卖装美团，需要打车装滴滴。

**OpenClaw的Skills系统就是你AI助手的App Store。**

每个Skill是一组文件，通常包括：
- **SKILL.md** — 技能说明书（告诉AI这个技能做什么、怎么用）
- **配置文件** — API Key、连接参数等
- **脚本文件** — 具体的执行逻辑

## 技能市场

OpenClaw社区维护了一个不断增长的技能仓库：[clawdhub.com](https://clawdhub.com)

**按类别浏览：**

| 类别 | 示例技能 | 解决什么问题 |
|------|----------|--------------|
| 📧 通信 | Gmail, Outlook, Slack | 邮件管理、消息通知 |
| 📅 效率 | Google Calendar, Todoist | 日程管理、任务追踪 |
| 🔍 搜索 | Brave Search, Tavily | 联网搜索、信息获取 |
| 💻 开发 | GitHub, VS Code, Docker | 代码管理、开发辅助 |
| 📊 数据 | GA4, GSC, Ahrefs | 流量分析、SEO优化 |
| 📝 内容 | Markdown, PDF Parser | 文档处理、格式转换 |
| 🌐 浏览器 | Playwright, Puppeteer | 网页浏览、数据抓取 |
| 🏠 智能家居 | HomeAssistant | 控制灯光、温度、设备 |

## 安装技能

### 方式一：从ClawHub安装（推荐）

\`\`\`bash
clawdhub install remind-me
\`\`\`

### 方式二：手动安装

\`\`\`bash
cd ~/.openclaw/skills
git clone https://github.com/openclaw/skill-remind-me remind-me
\`\`\`

## 推荐安装的技能包

| 技能 | 安装命令 | 用途 |
|------|----------|------|
| remind-me | clawdhub install remind-me | 提醒功能 |
| github | clawdhub install github | GitHub操作 |
| weather | clawdhub install weather | 天气查询 |
| seo | clawdhub install seo | SEO分析 |
| reddit | clawdhub install reddit | Reddit浏览 |

## 组合使用多个技能

技能可以组合使用。比如：

\`\`\`
你：帮我检查今天有没有重要的GitHub PR，如果有就发邮件通知我

助手：
1. 调用GitHub技能检查PR
2. 发现有一个需要review的PR
3. 调用Gmail技能发送通知邮件
\`\`\`

## 自己写一个Skill

社区的Skills不够用？自己写一个。

创建文件 ~/clawd/skills/weather/SKILL.md：

\`\`\`markdown
# 天气查询技能

## 能力
你可以查询任何城市的天气信息。

## 使用方法
调用 wttr.in API 获取天气：

curl "wttr.in/城市名?format=3"

示例：
curl "wttr.in/Shanghai?format=3"

## 输出格式
用简洁的中文告诉用户当前天气，包括温度和天气状况。
\`\`\`

就这样。一个Markdown文件就是一个Skill。

明天，我们将让助手开始主动工作。
    `
  },
  {
    id: 'openclaw-day6',
    title: '第6天：让助手主动工作',
    summary: 'OpenClaw 7天教程第六天：心跳机制、定时任务Cron、记忆系统，让助手从被动变主动。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', '心跳', '自动化'],
    content: `
## 从「你问它答」到「它主动找你」

过去五天，你的助手已经很能干了。它有灵魂、懂你、能读邮件、管日历、上网搜索。但它有一个致命的问题——

**你不找它，它就什么都不做。**

邮件堆了50封它不看。日历上的会议快开始了它不提醒。网站挂了它不告诉你。

今天我们解决这个问题。

## 心跳机制（Heartbeat）💓

Heartbeat是OpenClaw里最核心的机制之一——它让助手定期「醒来」，主动检查有没有需要处理的事。

### 原理

OpenClaw会按设定的间隔（默认30分钟）向助手发送一个心跳信号。助手收到信号后，会：
1. 读取HEARTBEAT.md中的任务清单
2. 逐项检查
3. 有需要通知你的事就发消息
4. 没事就安静回一个HEARTBEAT_OK

### 配置心跳

编辑 ~/clawd/HEARTBEAT.md：

\`\`\`markdown
# 心跳任务

## 每次检查
- 查看Gmail是否有重要邮件
- 查看日历，2小时内有没有会议要提醒

## 每天检查2-3次
- 检查网站是否正常访问
- 查看GSC有没有异常数据波动

## 不需要主动做
- 天气查询（等我问再查）
- 社交媒体（除非被@了）
\`\`\`

## 定时任务（Cron）

除了心跳，OpenClaw还支持精确的定时任务。

编辑 ~/clawd/cron/jobs.json：

\`\`\`json
{
  "jobs": [
    {
      "schedule": "0 8 * * *",
      "prompt": "发送每日早报：邮件摘要 + 今日日程"
    },
    {
      "schedule": "0 18 * * *",
      "prompt": "检查今天完成的事项，发送日报"
    },
    {
      "schedule": "0 */4 * * *",
      "prompt": "每4小时检查一次网站状态"
    }
  ]
}
\`\`\`

## 记忆系统

OpenClaw有三层记忆：

| 记忆类型 | 文件 | 内容 |
|----------|------|------|
| 身份记忆 | SOUL.md | 助手是谁、性格、行为准则 |
| 用户记忆 | USER.md | 你是谁、习惯、项目 |
| 长期记忆 | MEMORY.md | 助手主动记录的重要信息 |

MEMORY.md是助手自己维护的记忆文件。当你告诉它"记住这件事"时，它会写入MEMORY.md。

示例：

\`\`\`markdown
# 长期记忆

## 重要事项
- 2026-04-20：主人说下周要去深圳出差
- 2026-04-19：项目 deadline 是4月底

## 定期提醒
- 每周一早上提醒周报
- 每月最后一天提醒月报

## 用户偏好
- 不喜欢在深夜被打扰
- 喜欢简洁的报告格式
\`\`\`

## 实现主动工作

配置好心跳和Cron后，你的助手会：

- 每天早上8点自动发送早报
- 每天下午6点发送日报
- 每4小时检查网站状态
- 每30分钟检查邮件和日程

**你再也不需要「记得检查」了——有人帮你记着。**

明天，最后一天，我们将探索进阶玩法和未来展望。
    `
  },
  {
    id: 'openclaw-day7',
    title: '第7天：进阶玩法与未来展望',
    summary: 'OpenClaw 7天教程最后一天：回顾旅程，解锁进阶玩法，展望AI助手的未来。',
    category: 'OpenClaw教程',
    categorySlug: 'openclaw-tutorial',
    date: '2026-04-20',
    tags: ['OpenClaw', '进阶', '未来'],
    content: `
## 恭喜毕业 🎓

让我们回顾一下这七天你做了什么：

| 天数 | 你做了什么 | 成果 |
|------|------------|------|
| Day 1 | 认识AI助手的真正形态 | 明确了目标和预期 |
| Day 2 | 安装OpenClaw + 连接Telegram | 助手上线，可以对话 |
| Day 3 | 编写灵魂三件套 | 助手有了专属性格 |
| Day 4 | 接入Gmail、日历、搜索、浏览器 | 助手能帮你办事了 |
| Day 5 | 安装Skills技能包 | 助手武装到了牙齿 |
| Day 6 | 配置心跳 + Cron + 记忆 | 助手开始主动工作 |
| Day 7 | 今天 | 进阶和未来 |

**你现在拥有的，不是一个聊天机器人，是一个数字世界里的你的分身。**

## 进阶一：自己写一个Skill

社区的Skills不够用？自己写一个。

创建文件 ~/clawd/skills/weather/SKILL.md：

\`\`\`markdown
# 天气查询技能

## 能力
你可以查询任何城市的天气信息。

## 使用方法
调用 wttr.in API 获取天气：

curl "wttr.in/城市名?format=3"

## 输出格式
用简洁的中文告诉用户当前天气。
\`\`\`

### Skill开发原则

- **SKILL.md是核心**：写清楚能做什么、怎么做、输出什么格式
- **保持简单**：一个Skill做一件事，做好
- **错误处理**：在SKILL.md里写明"如果失败了怎么办"
- **安全提示**：涉及敏感操作的Skill，写明需要确认

## 进阶二：多Agent协作

你可以创建多个Agent，各司其职：

\`\`\`json
{
  "agents": [
    {"id": "assistant", "name": "小墨"},
    {"id": "monitor", "name": "监控系统"},
    {"id": "reporter", "name": "报表助手"}
  ]
}
\`\`\`

每个Agent有自己的SOUL.md、USER.md和Skills。

## 进阶三：API集成

OpenClaw可以通过API接入你自己的系统：

\`\`\`python
import openclaw

client = openclaw.Client("your-api-key")

# 发送消息
response = client.send_message("帮我检查今天的邮件")

# 触发心跳
client.trigger_heartbeat()
\`\`\`

## 进阶四：手机控制

除了Telegram，OpenClaw还支持：
- WhatsApp
- Discord
- Slack
- 短信（通过Twilio）

## 安全提醒

1. **数据隐私**：所有数据在你自己的机器上，但仍有风险
2. **权限控制**：敏感操作要确认
3. **API Key安全**：不要把Key写死在文件里，用环境变量

## 未来展望

AI助手正在从「工具」变成「伙伴」。

OpenClaw代表了AI发展的一个重要方向：**个性化、本地化、主动化**。

未来，每个人都会有一个AI助手。它了解你、能帮你做事、数据在你自己手里。

而今天，你已经拥有了一个。

## 持续成长路线图

1. **第1周**：熟悉基本功能，每天和助手对话
2. **第2周**：安装更多Skills，探索新能力
3. **第3周**：自己写一个Skill，解决你的特定需求
4. **第4周**：配置更多自动化，让助手做更多事

**七天的旅程结束了，但你和助手的故事才刚开始。**
    `
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(article => article.categorySlug === categorySlug);
};

export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return articles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
};