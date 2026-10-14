import React from 'react';
import data from './data';

function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CUSTOMER</th>
                            <th>ITEM</th>
                            <th>STATUS</th>
                            <th>SHIPPED DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillments.map((f) => (
                            <tr key={f._id} className={f.shipped ? '' : 'unshipped'}>
                                <td>{f._id}</td>
                                <td>{f.customer}</td>
                                <td>{f.item}</td>
                                <td>{f.shipped ? 'Shipped' : 'Not shipped'}</td>
                                <td>{f.shippedDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fulfillment;