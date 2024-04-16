import { Contract } from '@/types/contract';
import axios from 'axios';

const API_URL = process.env.API_URL || 'http://127.0.0.1:8000';

export async function addContract(data: Contract): Promise<void> {
  await axios.post(`${API_URL}/api/contracts/`, data);
}

export async function getContracts(): Promise<Contract[]> {
  const { data: response } = await axios.get(`${API_URL}/api/contracts/`);
  return response;
}