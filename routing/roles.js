
const roles = {
    admin: [
        { link: '/admin', name: 'Admin' },
        { link: '/teachersRoom', name: 'Teacher' },
        // { link: '/dictionary', name: 'Dictionary' },
        { link: '/MainStudentRuPage', name: 'Dictionary' },
        { link: '/start', name: 'Home' },
    ],
    teacher: [
        { link: '/teachersRoom', name: 'Teacher' },
        { link: '/MainStudentRuPage', name: 'Dictionary' },
        { link: '/start', name: 'Home' },
    ],
    student: [
        { link: '/MainStudentRuPage', name: 'Dictionary' },
        { link: '/start', name: 'Home' },
    ],
    public: [
        { link: '/start', name: 'Home' },
    ]
}

module.exports = roles