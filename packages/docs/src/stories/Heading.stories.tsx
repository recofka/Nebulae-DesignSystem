import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@nebula-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading will be a `h2` tag. To change tags it use the property `as` .',
      },
    },
  },
}
