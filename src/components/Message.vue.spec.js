import { shallowMount } from '@vue/test-utils'
import { hacker } from 'faker'
import Message from './Message.vue'

const shallowMessage = (props = {}) => shallowMount(Message, { propsData: { ...props } })

describe('Component: Message.vue', () => {
  it('renders default message', () => {
    const component = shallowMessage()
    expect(component.text()).to.equal('Hello World!')
  })

  it('renders custom message', () => {
    const customMessage = hacker.phrase()
    const component = shallowMessage({ message: customMessage })
    expect(component.text()).to.equal(customMessage)
  })
})
