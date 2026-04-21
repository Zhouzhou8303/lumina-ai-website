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