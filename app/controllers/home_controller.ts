import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  public async index({ view }: HttpContext) {
    interface Users {
      id: number
      avatar: string
      couverture: string
      name: string
      bio: string
      post: number
      follower: number
      following: number
      username: string
    }

    interface Tweet {
      id: number
      avatar: string
      name: string
      username: string
      tweet: string
      media: string
      date: string
      comment: number
      retweet: number
      like: number
    }

    interface Trends {
      id: number
      name: string
      category: string
      retweet: string
    }

    const users: Users[] = [
      {
        id: 1,
        avatar:
          'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        couverture: 'https://pbs.twimg.com/media/GdAF3TNWoAAkZAp?format=png&name=small',
        name: 'Juan Loze',
        bio: `🚀 Full Stack Developer | JavaScript Enthusiast
              💻 Building awesome web experiences
              🌟 Open Source Contributor`,
        username: '@juanloze',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
      {
        id: 2,
        avatar:
          'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg',
        couverture:
          'https://t4.ftcdn.net/jpg/12/73/78/93/360_F_1273789314_2S1fxeet5ceCyAdAnS3tLqINL960Ytv7.jpg',
        name: 'David',
        username: '@david',
        bio: 'MA BIO',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
      {
        id: 3,
        avatar:
          'https://static.vecteezy.com/system/resources/thumbnails/011/490/381/small_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg',
        couverture: 'https://i.pinimg.com/736x/2a/cd/b1/2acdb1dc422f9707aedd084f7bfbb3db.jpg',
        name: 'Jacques',
        username: '@jacques',
        bio: 'MA BIO',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
      {
        id: 4,
        avatar:
          'https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp',
        couverture:
          'https://upload.wikimedia.org/wikipedia/commons/2/25/Photo_de_couverture_Twitter_PLCL.png',
        name: 'Stephane',
        username: '@stephane',
        bio: 'MA BIO',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
    ]

    const user = users.find((use) => use.id === 1)

    const tweets: Tweet[] = [
      {
        id: 1,
        avatar:
          'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        name: 'Juan Loze',
        username: '@juanloze',
        tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        media: '',
        date: '1 min',
        comment: 12,
        retweet: 100,
        like: 123,
      },
      {
        id: 2,
        avatar:
          'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg',
        name: 'Andrys Lamiel',
        username: '@andryslamiel',
        tweet: 'Notre bel hotel se situant au centre de la ville de Matadi.',
        media: 'https://i.ytimg.com/vi/jLH7_0h-jWw/sddefault.jpg',
        date: '1 min',
        comment: 100,
        retweet: 320,
        like: 532,
      },
      {
        id: 3,
        avatar: '',
        name: 'Exaucé Tshimanga',
        username: '@exauce',
        tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        media: '',
        date: '1 min',
        comment: 0,
        retweet: 10,
        like: 20,
      },
      {
        id: 4,
        avatar:
          'https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp',
        name: 'Stephane Losembe',
        username: '@stephanelosembe',
        tweet: 'Smoke is fun.',
        media: 'https://gaapp.org/wp-content/uploads/2021/11/smoking-2529858_1920.jpg',
        date: '1 min',
        comment: 3300,
        retweet: 1000,
        like: 2000,
      },
    ]

    const trends: Trends[] = [
      {
        id: 1,
        name: 'Trending Worldwide',
        category: '#Javascript',
        retweet: '50.3K',
      },
    ]

    return view.render('pages/home', { tweets, users, user, trends })
  }

  public async profile({ view, params }: HttpContext) {
    interface Users {
      id: number
      avatar: string
      couverture: string
      name: string
      bio: string
      post: number
      follower: number
      following: number
      username: string
    }

    interface Tweet {
      id: number
      avatar: string
      name: string
      username: string
      tweet: string
      media: string
      date: string
      comment: number
      retweet: number
      like: number
    }

    const users: Users[] = [
      {
        id: 1,
        avatar:
          'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        couverture: 'https://pbs.twimg.com/media/GdAF3TNWoAAkZAp?format=png&name=small',
        name: 'Juan Loze',
        bio: `🚀 Full Stack Developer | JavaScript Enthusiast
              💻 Building awesome web experiences
              🌟 Open Source Contributor`,
        username: '@juanloze',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
      {
        id: 2,
        avatar:
          'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg',
        couverture:
          'https://t4.ftcdn.net/jpg/12/73/78/93/360_F_1273789314_2S1fxeet5ceCyAdAnS3tLqINL960Ytv7.jpg',
        name: 'David',
        username: '@david',
        bio: 'MA BIO',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
      {
        id: 3,
        avatar:
          'https://static.vecteezy.com/system/resources/thumbnails/011/490/381/small_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg',
        couverture: 'https://i.pinimg.com/736x/2a/cd/b1/2acdb1dc422f9707aedd084f7bfbb3db.jpg',
        name: 'Jacques',
        username: '@jacques',
        bio: 'MA BIO',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
      {
        id: 4,
        avatar:
          'https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp',
        couverture:
          'https://upload.wikimedia.org/wikipedia/commons/2/25/Photo_de_couverture_Twitter_PLCL.png',
        name: 'Stephane',
        username: '@stephane',
        bio: 'MA BIO',
        post: 2456,
        follower: 2456,
        following: 2456,
      },
    ]

    const user = users.find((use) => use.id === Number.parseInt(params.id))

    const tweets: Tweet[] = [
      {
        id: 1,
        avatar:
          'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        name: 'Juan Loze',
        username: '@juanloze',
        tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        media: '',
        date: '1 min',
        comment: 12,
        retweet: 100,
        like: 123,
      },
      {
        id: 2,
        avatar:
          'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg',
        name: 'Stephane',
        username: '@stephane',
        tweet: 'Notre bel hotel se situant au centre de la ville de Matadi.',
        media: 'https://i.ytimg.com/vi/jLH7_0h-jWw/sddefault.jpg',
        date: '1 min',
        comment: 100,
        retweet: 320,
        like: 532,
      },
      {
        id: 3,
        avatar: '',
        name: 'Exaucé Tshimanga',
        username: '@exauce',
        tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        media: '',
        date: '1 min',
        comment: 0,
        retweet: 10,
        like: 20,
      },
      {
        id: 4,
        avatar:
          'https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp',
        name: 'Andrys Lamiel',
        username: '@andryslamiel',
        tweet: 'Smoke is fun.',
        media: 'https://gaapp.org/wp-content/uploads/2021/11/smoking-2529858_1920.jpg',
        date: '1 min',
        comment: 3300,
        retweet: 1000,
        like: 2000,
      },
    ]
    return view.render('pages/profile', { user, users, tweets })
  }
}
