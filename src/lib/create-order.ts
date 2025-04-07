export const CreateOrder = async (data:any) => {
    const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const res = await response.json();
    return res
}

