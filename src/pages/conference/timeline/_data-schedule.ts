const events_data = [
    {
        id: 'day_01',
        title: 'Day 1',
        date: '30th of Novembe',
        period: 'Registrations 9:30 - 10:00',
        data: [
            {
                timings: [
                    {
                        time: '10:00 - 10:20',
                        id: 'time_01',
                    },
                    {
                        time: '10:20 - 11:20',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Alcino',
                        topic: 'Introduction - Overview of Brazil in Deriv',
                    },
                    {
                        id: 'name_02',
                        name: ' Sebastian',
                        topic: 'Brazil in numbers',
                    },
                ],
                free_time: 'Break 11:00 - 11:15',
            },
            {
                timings: [
                    {
                        time: '11:16 - 12:00',
                        id: 'time_01',
                    },
                    {
                        time: '12:00 - 13:00',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Raul',
                        topic: 'Payment methods',
                    },
                    {
                        id: 'name_02',
                        name: ' Ricardo',
                        topic: 'Payment Agents',
                    },
                ],
                free_time: 'Break 13:00 - 14:00',
            },
            {
                timings: [
                    {
                        time: '14:00 - 15:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Ricardo',
                        topic: 'MetaTrader 5 on Deriv',
                    },
                ],
                free_time: 'Break 13:00 - 14:00',
            },
            {
                timings: [
                    {
                        time: '15:15 - 16:00',
                        id: 'time_02',
                    },
                    {
                        time: '16:00 - 16:45',
                        id: 'time_03',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: ' Alejandro Marcelo',
                        topic: 'Deriv P2P',
                    },
                    {
                        id: 'name_02',
                        name: 'Claudia',
                        topic: 'Account security and fraud prevention',
                    },
                ],
                free_time: 'Networking 16:15 - 19:00',
            },
        ],
    },

    {
        id: 'day_02',
        title: 'Day 2 - Virtual and in person',
        date: 'December 1st',
        period: '',
        data: [
            {
                timings: [
                    {
                        time: '9:30 - 9:45',
                        id: 'time_01',
                    },
                    {
                        time: '9:45 - 10:30',
                        id: 'time_02',
                    },
                    {
                        time: '10:30 - 11:00',
                        id: 'time_03',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Alcino and Sebastian',
                        topic: 'Brief summary of the day',
                    },
                    {
                        id: 'name_02',
                        name: ' Raul',
                        topic: 'Deriv X',
                    },
                    {
                        id: 'name_02',
                        name: 'Ricardo',
                        topic: 'CTrader',
                    },
                ],
                free_time: 'Break 11:00 - 11:15',
            },
            {
                timings: [
                    {
                        time: '11:15 - 12:30',
                        id: 'time_01',
                    },
                    {
                        time: '12:30 - 13:00',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Sasky',
                        topic: 'API - Deriv for developers',
                    },
                    {
                        id: 'name_02',
                        name: 'Sasky',
                        topic: 'Best practices to protect customer data',
                    },
                ],
                free_time: 'Break 13:00 - 14:00',
            },
            {
                timings: [
                    {
                        time: '14:00 - 15:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Ana',
                        topic: 'Bots',
                    },
                ],
                free_time: 'Break 15:00 - 15:15',
            },
            {
                timings: [
                    {
                        time: '15:15 - 16:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Sebastian',
                        topic: 'Deriv Go',
                    },
                ],
                free_time: 'Networking 16:15 - 19:00',
            },
        ],
    },
    {
        id: 'day_03',
        title: 'Day 3 - In person',
        date: 'December 2nd',
        period: '',
        data: [
            {
                timings: [
                    {
                        time: '10:00 - 10:30',
                        id: 'time_01',
                    },
                    {
                        time: '10:30 - 11:30',
                        id: 'time_02',
                    },
                    {
                        time: '11:30 - 12:30',
                        id: 'time_03',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Sasky and Sebastian',
                        topic: 'Summary of the day - One-on-One Meetings',
                    },
                    {
                        id: 'name_02',
                        name: 'Deriv Brazil team',
                        topic: 'Bots Workshop - One-on-One Meetings',
                    },
                    {
                        id: 'name_02',
                        name: 'Deriv Brazil team',
                        topic: 'API Workshop - Individual Meetings',
                    },
                ],
                free_time: 'Break 12:30 - 13:30',
            },
            {
                timings: [
                    {
                        time: '13:30 - 14:30',
                        id: 'time_01',
                    },
                    {
                        time: '14:30 - 15:30',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Deriv Brazil team',
                        topic: 'MT5 Workshop - One-on-One Meetings',
                    },
                    {
                        id: 'name_02',
                        name: 'Deriv Brazil team',
                        topic: 'cTrader Workshop - One-on-One Meetings',
                    },
                ],
                free_time: 'Break 15:30 - 15:45',
            },
            {
                timings: [
                    {
                        time: '15:45 - 16:45',
                        id: 'time_01',
                    },
                    {
                        time: '16:45 - 17:45',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Deriv Brazil team',
                        topic: 'Deriv X Workshop - One-on-One Meetings',
                    },
                ],
                free_time: 'Free 17:45 - 20:00',
            },
            {
                timings: [
                    {
                        time: '20:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: 'Deriv Brazil team',
                        topic: 'Closing dinner',
                    },
                ],
                free_time: '',
            },
        ],
    },
]

export default events_data
