type TextVariant = 'normal' | 'heading1' | 'heading2' | 'heading3';

type TextProps = {
  children: React.ReactNode,
  variant?: TextVariant,
  subdued?: boolean
}

const variants: { [key in TextVariant] : string} = {
  normal: 'whitespace-pre-line',
  heading1: 'font-bold text-3xl whitespace-pre-line',
  heading2: 'font-bold text-slate-600 text-2xl whitespace-pre-line',
  heading3: 'font-bold text-slate-600 text-lg whitespace-pre-line',
};

export default function Text ({ children, variant = 'normal', subdued = false}: TextProps) {
  return (
    <div className={variants[variant] + ((subdued) ? ' opacity-75' : '')}>{children}</div>
  )
}