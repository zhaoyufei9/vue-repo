// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading


function loader (loading) {
    
}

const microApps = [
    // {
    //   name: 'home',
    //   activeRule: (location: Location) => !location.pathname.startsWith('/adcreate') || !location.pathname.startsWith('/report') || !location.pathname.startsWith('/preput'),
    //   entry: 'http://localhost:5173'
    // },
    {
      name: 'adcreate',
      activeRule: '/adcreate',
      entry: 'http://localhost:5174'
    },
    {
      name: 'report',
      activeRule: '/report',
      entry: 'http://localhost:5175'
    },
    {
      name: 'preput',
      activeRule: '/preput',
      entry: 'http://localhost:5176'
    }
  ]

export const Apps = microApps.map(item=>{
    const result = {
        loader,
        container: '#subapp-root',
        ...item,
        
    }
    return result
})

