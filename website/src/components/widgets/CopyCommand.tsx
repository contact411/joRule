import React, { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

interface CopyCommandProps {
  command: string
  label?: string
  variant?: 'default' | 'outline' | 'jarule'
  size?: 'default' | 'sm' | 'lg' | 'xl'
  className?: string
}

/**
 * Concept copycard — one hairline-raised row: command text + copy action.
 * Copy = clouds fill / midnight ink; transient Copied = turquoise fill /
 * midnight ink (the accent's single status mark). The command renders as
 * plain text, so the card is fully usable without JavaScript; the button
 * only enhances it.
 */
export default function CopyCommand({
  command,
  label,
  variant = 'default',
  size = 'default',
  className,
}: CopyCommandProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch (error) {
      // Fallback for older browsers / non-secure contexts
      const textarea = document.createElement('textarea')
      textarea.value = command
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
      } catch (e) {
        /* never break the page */
      }
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <div className={cn('relative', className)}>
      <div className="flex flex-col items-stretch gap-3 rounded-md border border-border bg-background px-4 py-3.5 pl-[18px] sm:flex-row sm:items-center sm:gap-3.5">
        {label ? (
          <div className="sr-only">{label}</div>
        ) : null}
        <code className="flex-1 font-mono text-[13.5px] leading-[1.6] text-foreground break-words min-w-0">
          {command}
        </code>

        <Button
          variant={variant}
          size={size}
          onClick={handleCopy}
          className={cn(
            'shrink-0',
            copied
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-foreground text-background hover:bg-foreground/90'
          )}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
    </div>
  )
}