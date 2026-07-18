import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      initialValue: 'ACTIVITY',
      options: {
        list: [
          {title: 'ACTIVITY', value: 'ACTIVITY'},
          {title: 'MEETING', value: 'MEETING'},
          {title: 'UPCOMMING', value: 'UPCOMMING'},
        ]
      }
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'date_to',
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
      name: 'body',
      type: 'blockContent',
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
