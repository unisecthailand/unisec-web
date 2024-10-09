import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const bannerType = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'RefPost',
      type: 'reference',
      to: [
        {type: 'meeting-post'},
        {type: 'post'}
      ]
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'author',
      type: 'string',
      initialValue: 'UNISEC Thailand'
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'cover',
      type: 'image',
    }),
    defineField({
      name: 'extlink',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
