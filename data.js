// let data = {
//   'component-1': {
//     children: ['component-2', 'component-3']
//   },
//   'component-2': {
//     children: ['component-3', 'component-5']
//   },
//   'component-3': {
//     children: ['component-4', 'component-5']
//   },
//   'component-4': {
//     children: ['component-5']
//   }
// }


let data = [
  {
    name: 'route-1',
    children: [
      {
        name: 'component-1',
        children: [
          {
            name: 'component-2',
            children: []
          }
        ]
      },
      {
        name: 'component-3',
        children: [
          {
            name: 'component-4',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'route-2',
    children: [
      {
        name: 'component-3',
        children: [
          {
            name: 'component-4',
            children: []
          }
        ]
      }
    ]
  }
];


export default data;