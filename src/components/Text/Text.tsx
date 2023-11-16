export default function Text ({ children, variant = 'normal' }: {children: React.ReactNode, variant?: 'normal' | 'heading1'}) {
  const variants: { [key in 'normal' | 'heading1'] : string} = {
    normal: 'whitespace-pre-line',
    heading1: 'font-semibol text-3xl whitespace-pre-line'
  };
  return (
    <div className={variants[variant]}>{children}</div>
  )
}