const roles = {
    admin: [
        { link: '/admin', name: 'Admin' },
        { link: '/teachersRoom', name: 'Teacher' },
        { link: '/dictionery', name: 'Dictionary' },
        { link: '/start', name: 'Home' },
    ],
    teacher: [
        { link: '/teachersRoom', name: 'Teacher' },
        { link: '/dictionery', name: 'Dictionary' },
        { link: '/start', name: 'Home' },
    ],
    student: [
        { link: '/dictionery', name: 'Dictionary' },
        { link: '/start', name: 'Home' },
    ],
    public: [
        { link: '/start', name: 'Home' },
    ]
}

module.exports = roles