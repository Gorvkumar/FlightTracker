const API_BASE_URL = 'https://flight-status-mock.core.travelopia.cloud';

export async function getFlights() {
  try {
    const response = await fetch(`${API_BASE_URL}/flights`);
    if (!response.ok) throw new Error('Failed to fetch flights');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch flights. Please try again later.');
  }
}

export async function getFlight(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/flights/${id}`);
    if (!response.ok) throw new Error('Flight not found');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch flight details. Please try again later.');
  }
}