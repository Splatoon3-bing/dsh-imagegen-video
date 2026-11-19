/**
 * 「冰神TV」品牌标：中文短名跟随主题前景色，TV 用品牌强调色。
 *
 * 原实现把「团」的轮廓从品牌稿矢量描下来（换机器、没装中文字体也长得一样）。
 * 换成文本渲染后字形依赖系统字体，但改名成本降到只改 `src/brand.ts` 一处，
 * 对内部工具更划算；如果以后要做对外发行版，再把字形矢量化回来。
 */
import { BRAND } from '../brand.ts'

export interface BrandMarkProps {
  /** 渲染高度（CSS px）。 */
  height?: number
}

/**
 * 行内品牌标。`aria-label` 提供可读名称，不额外输出文字节点——
 * 顶栏里它和图标并排，旁边不需要再重复一遍产品名。
 */
export function BrandMark({ height = 22 }: BrandMarkProps) {
  return (
    <span
      role="img"
      aria-label={BRAND.zh}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '0.06em',
        height,
        lineHeight: 1,
        fontSize: Math.round(height * 0.86),
        fontWeight: 700,
        whiteSpace: 'nowrap',
        flex: 'none',
      }}
    >
      <span style={{ color: 'currentColor' }}>{BRAND.zhShort}</span>
      <span style={{ color: BRAND.accent }}>TV</span>
    </span>
  )
}
