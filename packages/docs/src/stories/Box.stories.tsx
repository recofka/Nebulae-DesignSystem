import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@nebula-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Test</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
