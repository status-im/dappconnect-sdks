import { Actions } from './actions'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Actions> = {
  title: 'Messages/actions',
  component: Actions,
  argTypes: {},
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/IBmFKgGL1B4GzqD8LQTw6n/Design-System-for-Web?node-id=14560%3A157866&t=87Ziud3PyYYSvsRg-4',
    },
  },
  decorators: [
    Story => {
      return (
        <div
          style={{
            position: 'relative',
            width: 110,
            height: 38,
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

type Story = StoryObj<typeof Actions>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {},
}

export default meta
