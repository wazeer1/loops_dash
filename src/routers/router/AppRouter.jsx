import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserRole } from '../../store/account/accountsSelectors'
import Layout from '../../layouts/Layout'

const AppRouter = () => {
    const role = useSelector(selectUserRole)
    console.log(role, '_____');
  return (
    <Layout>
      app router
    </Layout>
  )
}

export default AppRouter
