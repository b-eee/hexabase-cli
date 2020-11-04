import {expect, test} from '@oclif/test'

describe('workspacesSelect', () => {
  test
  .stdout()
  .command(['workspacesSelect'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['workspacesSelect', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
