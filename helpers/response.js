const response_data = (data={}, status=1, message='Success') => {
    return {
        statusCode: status,
        message: message,
        data: data
    }
}

module.exports = {
    response_data
}