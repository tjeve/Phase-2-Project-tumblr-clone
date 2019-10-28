exports.seed = function (knex) {
  const faker = require('faker')
  const fakeData = []
  const dataCount = 10
  const userCount = 8
  for (let i = 0; i < dataCount; i++) {
    for (let j = 0; j < userCount; j++) {
      fakeData.push({
        userId: j + 1,
        title: faker.lorem.sentence(),
        postedImage: `https://picsum.photos/500?random=${faker.random.number() *
          faker.random.number()}`,
        // postedImage: `${faker.random.image()}?random=${faker.random.number() *
        //   faker.random.number()}`.replace(/^http/g, 'https'),
        numberOfNotes: faker.random.number(),
        date: faker.date.past(10),
        postedMessage: faker.lorem.text()
      })
    }
  }

  // Deletes ALL existing entries
  return knex('Posts')
    .del()
    .then(function () {
      // Inserts seed entries

      return knex('Posts').insert(fakeData)
      // return knex('Posts').insert([
      //   {
      //     userId: 1,
      //     title: 'Insert title here',
      //     postedImage: 'https://www.dw.com/image/40320815_303.jpg',
      //     numberOfNotes: 34,
      //     date: '2019-07-17T02:49:24 +05:00',
      //     postedMessage:
      //       'Voluptate occaecat est minim esse eiusmod aliquip elit Lorem sunt cupidatat minim commodo pariatur.'
      //   },
      //   {
      //     userId: 1,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 25,
      //     date: '2014-02-01T06:06:02 +06:00',
      //     postedMessage:
      //       'Est aliquip sunt consectetur ut qui in Lorem exercitation fugiat amet excepteur anim elit laborum.'
      //   },
      //   {
      //     userId: 2,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 0,
      //     date: '2014-05-04T06:59:11 +05:00',
      //     postedMessage: 'Ullamco eu sint consequat irure.'
      //   },
      //   {
      //     userId: 3,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 33,
      //     date: '2016-09-23T05:43:59 +05:00',
      //     postedMessage:
      //       'Cillum occaecat non nostrud enim fugiat nulla aute tempor deserunt.'
      //   },
      //   {
      //     userId: 4,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 21,
      //     date: '2015-05-10T12:46:48 +05:00',
      //     postedMessage:
      //       'Ad irure eu eiusmod proident dolor voluptate culpa ea nulla et.'
      //   },
      //   {
      //     userId: 5,
      //     title: 'title',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 39,
      //     date: '2018-12-20T10:54:50 +06:00',
      //     postedMessage:
      //       'Fugiat minim elit minim non exercitation consequat qui esse ea Lorem.'
      //   },
      //   {
      //     userId: 6,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 14,
      //     date: '2014-11-03T08:53:30 +06:00',
      //     postedMessage: 'Id veniam ea ut laboris nulla cupidatat consectetur.'
      //   },
      //   {
      //     userId: 7,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 20,
      //     date: '2016-01-06T01:34:03 +06:00',
      //     postedMessage: 'Ea proident incididunt sit duis voluptate id mollit.'
      //   },
      //   {
      //     userId: 1,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 9,
      //     date: '2014-09-13T03:33:27 +05:00',
      //     postedMessage: 'Velit mollit voluptate minim dolor laborum pariatur.'
      //   },
      //   {
      //     userId: 2,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 1,
      //     date: '2014-10-21T08:38:18 +05:00',
      //     postedMessage: 'Consequat labore quis excepteur ex.'
      //   },
      //   {
      //     userId: 3,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 6,
      //     date: '2018-05-27T12:22:54 +05:00',
      //     postedMessage:
      //       'Voluptate est anim velit velit eu reprehenderit magna eiusmod laboris sunt do mollit exercitation.'
      //   },
      //   {
      //     userId: 4,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 0,
      //     date: '2019-09-04T12:42:48 +05:00',
      //     postedMessage:
      //       'Ex pariatur incididunt ex in amet nostrud consequat quis fugiat.'
      //   },
      //   {
      //     userId: 5,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 12,
      //     date: '2015-02-06T10:08:53 +06:00',
      //     postedMessage:
      //       'Esse reprehenderit amet eu nulla excepteur dolor ad aliquip officia.'
      //   },
      //   {
      //     userId: 6,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 36,
      //     date: '2018-05-11T01:20:54 +05:00',
      //     postedMessage:
      //       'Laborum reprehenderit in ad nostrud culpa sunt dolore tempor occaecat amet.'
      //   },
      //   {
      //     userId: 7,
      //     title: 'Insert title here',
      //     postedImage: 'http://placehold.it/32x32',
      //     numberOfNotes: 38,
      //     date: '2018-03-03T04:32:48 +06:00',
      //     postedMessage: 'Labore nisi ipsum duis incididunt esse duis dolor.'
      //   }
      // ])
    })
  //     })
}
