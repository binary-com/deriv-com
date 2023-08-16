import React from 'react'

const Table = () => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Monthly volume requirement</th>
                        <th>Fee per million</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0 - 3 billion</td>
                        <td>$ 8.00</td>
                    </tr>
                    <tr>
                        <td>&gt; 3 - 5 billion</td>
                        <td>$ 7.00</td>
                    </tr>
                    <tr>
                        <td>&gt; 5 - 10 billion</td>
                        <td>$ 6.00</td>
                    </tr>
                    <tr>
                        <td>&gt; 10 billion</td>
                        <td>$ 5.00</td>
                    </tr>
                    <tr>
                        <td>
                            0 - 15 billion <span>(Crypto)</span>
                        </td>
                        <td>5.5 bps / 0.055%</td>
                    </tr>
                    <tr>
                        <td>
                            &gt; 15 billion <span>(Crypto)</span>
                        </td>
                        <td>5 bps / 0.05%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
