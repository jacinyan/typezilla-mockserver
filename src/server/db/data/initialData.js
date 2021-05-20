export const taskTypes = [
  {
    name: 'task'
  },
  {
    name: 'bug'
  }
]

export const tags = [
  {
    name: 'preliminary'
  },
  {
    name: 'mid-project'
  },
  {
    name: 'final'
  }
]

export const epics = [
  {
    name: 'Drivers Equipment Development',
    start: new Date('2021-1-10').getTime(),
    end: new Date('2021-02-11').getTime()
  },
  {
    name: 'Maps & Navigation Development',
    start: new Date('2021-02-12').getTime(),
    end: new Date('2021-03-14').getTime()
  },
  {
    name: 'Purchase Order Development',
    start: new Date('2021-03-08').getTime(),
    end: new Date('2021-04-09').getTime()
  }
]

export const kanbans = [
  {
    name: 'initiation'
  },
  {
    name: 'execution'
  },
  {
    name: 'closure'
  }
]

export const users = [
  {
    name: 'Hewitt McGowan',
    organization: 'Delivery'
  },
  {
    name: 'Ed Grylls ',
    organization: 'Delivery'
  },
  {
    name: 'Mandy Cheung',
    organization: 'Headquarters'
  },
  {
    name: 'Jane Wang',
    organization: 'Service Gateway'
  }
]

export const projects = [
  {
    name: 'Drivers Management System',
    personId: 1,
    organization: 'Delivery',
    created: 1604989757139
  },
  {
    name: 'Group-buying System',
    personId: 2,
    organization: 'Group Buying',
    created: 1604989757139,
    pin: true
  },
  {
    name: 'Equipment Management System',
    personId: 2,
    organization: 'Equipment',
    created: 1546300800000
  },
  {
    name: 'Headquarters Management',
    personId: 3,
    organization: 'Headquarters',
    created: 1604980000011
  },
  {
    name: 'Route Planning System',
    personId: 4,
    organization: 'Delivery',
    created: 1546900800000
  }
]

export const tasks = [
  {
    name: 'Drivers Registration Development',
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: 'Complete the task ASAP'
  },
  {
    name: 'Drivers Authentication Development',
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: 'With JWT'
  },
  {
    name: 'Unit Tests',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ''
  },
  {
    name: 'Optimisation',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ''
  },
  {
    name: 'Authorisation',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ''
  },
  {
    name: 'UI Development',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ''
  },
  {
    name: 'Self Testing',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ''
  }
]
