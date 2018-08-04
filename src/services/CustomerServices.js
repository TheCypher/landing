import Api from '@/services/Api'

export default {
	addCustomer(customer_data) {
		return Api().post('/add', customer_data)
	}
}