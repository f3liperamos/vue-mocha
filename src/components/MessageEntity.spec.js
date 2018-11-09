import { hacker } from 'faker'
import MessageEntity from './MessageEntity'

describe('Entity: MessageEntity', () => {
  it('returns default message', () => {
    const message = new MessageEntity().message
    expect(message).to.equal('Hello World!')
  })

  it('returns custom message', () => {
    const customMessage = hacker.phrase()
    const message = new MessageEntity(customMessage).message
    expect(message).to.equal(customMessage)
  })
})
