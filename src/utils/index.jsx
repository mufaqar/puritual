export function formatDate(dateString) {
    const date = new Date(dateString);    
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two-digit format
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // Convert month to uppercase
    const year = date.getFullYear().toString();

    return {
        date: day,
        month: month,
        year: year
    };
}