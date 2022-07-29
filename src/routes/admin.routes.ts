import { Router } from 'express'
import * as adminControllers from '../controllers/admin.controllers'

const adminRoute = Router()
export const loginAdminRoute = Router()

adminRoute.get('/api/admin/posts', adminControllers.getAllPosts)
loginAdminRoute.post('/api/admin/login', adminControllers.loginUser)

export default adminRoute
