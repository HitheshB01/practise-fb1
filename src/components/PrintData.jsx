import React from 'react'

const PrintData = () => {
    const data = {
        names: 'John Doe',
        email: 'john.doe@example.com',
        message: 'This is a sample message.'
      };
    
      return (
        <div className="max-w-sm p-6 bg-gray-400 border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-xl mb-4">User Details</h3>
        <p className="mb-2"><>Name:</> {data.names}</p>
        <p className="mb-2"><>Email:</> {data.email}</p>
        <p className="mb-2"><>Message:</> {data.message}</p>
      </div>
      );
}

export default PrintData
 