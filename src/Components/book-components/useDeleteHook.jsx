// useDeleteHook.js
import { useState } from 'react';
import { showToast } from '../ToastAlert';

const useDeleteHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const deleteData = async (url) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      showToast('Data deleted successfully!', 'success');
      setSuccess(true);
    } catch (err) {
      console.error('Error deleting data:', err);
      setError(err.message);
      showToast('Error deleting data!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error, success };
};

export default useDeleteHook;
