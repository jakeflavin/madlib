import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tile } from './Tile'
import { TALES } from '@/tales'

const tale = TALES[0]!

describe('Tile', () => {
  it('is a button, so a cover can be reached by keyboard as well as clicked', async () => {
    const onOpen = vi.fn()
    render(<Tile tale={tale} onOpen={onOpen} />)
    await userEvent.tab()
    await userEvent.keyboard('{Enter}')
    expect(onOpen).toHaveBeenCalledOnce()
  })

  it('shows the reading time when there is nothing more specific to say', () => {
    render(<Tile tale={tale} onOpen={vi.fn()} />)
    expect(screen.getByText(`${tale.minutes} min read`)).toBeInTheDocument()
  })

  it('prefers a given note over the reading time', () => {
    render(<Tile tale={tale} note="3 of 28 filled in" onOpen={vi.fn()} />)
    expect(screen.getByText('3 of 28 filled in')).toBeInTheDocument()
    expect(screen.queryByText(`${tale.minutes} min read`)).not.toBeInTheDocument()
  })

  it("publishes the story's accent as a custom property rather than a colour prop", () => {
    // The fill is a background only; the stylesheet decides what uses it.
    render(<Tile tale={tale} onOpen={vi.fn()} />)
    expect(screen.getByRole('button').style.getPropertyValue('--fill')).toBe(tale.accent)
  })

  it('shows the title', () => {
    render(<Tile tale={tale} onOpen={vi.fn()} />)
    expect(screen.getByText(tale.title)).toBeInTheDocument()
  })
})
