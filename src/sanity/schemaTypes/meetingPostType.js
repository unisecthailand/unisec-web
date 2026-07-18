import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const meetingPostType = defineType({
  name: 'meeting-post',
  title: 'Meeting Post',
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
      initialValue: 'MEETING',
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
      name: 'capture',
      type: 'image',
    }),
    defineField({
      name: 'youtube',
      type: 'string',
      initialValue: 'none'
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
