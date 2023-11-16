type TextProps = {
  children: React.ReactNode,
  variant?: 'normal' | 'heading1' | 'heading2' | 'heading3'
}

export default function Text ({ children, variant = 'normal' }: TextProps) {
  const variants: { [key in 'normal' | 'heading1' | 'heading2' | 'heading3'] : string} = {
    normal: 'whitespace-pre-line',
    heading1: 'font-semibold text-3xl whitespace-pre-line',
    heading2: 'font-semibold text-2xl whitespace-pre-line',
    heading3: 'font-medium text-lg whitespace-pre-line'
  };
  return (
    <div className={variants[variant]}>{children}</div>
  )
}