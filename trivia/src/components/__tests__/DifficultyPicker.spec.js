import { mount } from '@vue/test-utils'
import { expect, test, describe, vi } from 'vitest'
import DifficultyPicker from '@/components/DifficultyPicker.vue'

describe('src/components/DifficultyPicker', () => {
  function createComponent(options) {
    return mount(DifficultyPicker, options)
  }

  test('renders 4 choices: easy, medium, hard, mixed', () => {
    const component = createComponent()
    const choices = component.findAll('[data-testid="difficulty-card"]')

    expect(choices.length).toBe(4)
    expect(choices.at(0).text()).toBe('Easy')
    expect(choices.at(1).text()).toBe('Medium')
    expect(choices.at(2).text()).toBe('Hard')
    expect(choices.at(3).text()).toBe('Mixed')
  })

  test('on click, emit an event with the chosen value', () => {
    const component = createComponent()
    const choice = component.find('[data-testid="difficulty-card"]')

    choice.trigger('click')

    expect(component.emitted('update:modelValue')[0]).toEqual(['easy'])
  })

  test('on click, reassess active and pass the value to card', () => {
    const component = createComponent({ shallow: true })
    const choice = component.find('[data-testid="difficulty-card"]')

    choice.trigger('click')

    expect(choice.attributes('active')).toBe(true)
  })
})
