import { shallowMount } from '@vue/test-utils'
import { hacker } from 'faker'
import App from './App.vue'

const shallowApp = (props = {}) => shallowMount(App, { propsData: { ...props } })

describe('Component: App.vue', () => {
  it('renders default message', () => {
    const component = shallowApp()
    expect(component.text()).to.equal('Hello World!')
  })

  it('renders custom message', () => {
    const customMessage = hacker.phrase()
    const component = shallowApp({ message: customMessage })
    expect(component.text()).to.equal(customMessage)
  })
})