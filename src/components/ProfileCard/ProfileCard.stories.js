import ProfileCard from './ProfileCard'
import { action } from '@storybook/addon-actions'
import faker from 'faker'
import random from 'lodash/fp/random'

export default {
  title: 'Ticket Preview',
  component: ProfileCard,
}
const singleTag = [{ name: 'javascript', color: '#2e4057' }]
const multipleTags = [
  { name: 'design', color: '#00cecb' },
  { name: 'open source', color: '#ffed88' },
  { name: 'computer science', color: '#ff5e5b' },
]

export const Default = () => ({
  components: { ProfileCard },
  template:
    '<profile-card :tags="tags" :title="title" :description="description":board="board" :project="project"   />',
  methods: { action: action('clicked') },
  data() {
    return {
      tags: [],
      title: faker.lorem.words(random(1, 5)),
      description: faker.lorem.sentences(random(1, 3)),
      board: 'fullstack',
      project: 'Align',
    }
  },
})

export const withATag = () => ({
  components: { ProfileCard },
  template:
    '<profile-card :tags="tags" :title="title" :description="description":board="board" :project="project"   />',
  methods: { action: action('clicked') },
  data() {
    return {
      tags: singleTag,
      title: faker.lorem.words(random(1, 5)),
      description: faker.lorem.sentences(random(1, 4)),
      board: 'fullstack',
      project: 'Align',
    }
  },
})

export const withTags = () => ({
  components: { ProfileCard },
  template:
    '<profile-card :tags="tags" :title="title" :description="description":board="board" :project="project"   />',
  methods: { action: action('clicked') },
  data() {
    return {
      tags: multipleTags,
      title: faker.lorem.words(random(1, 5)),
      description: faker.lorem.sentences(random(1, 4)),
      board: 'fullstack',
      project: 'Align',
    }
  },
})
