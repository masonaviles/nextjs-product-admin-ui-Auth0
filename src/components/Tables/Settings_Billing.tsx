"use client";

import React, { useState } from 'react';

const SettingsBilling = () => {
    interface Card {
        cardholder_name: string;
        card_number: string;
        expiry_date: string;
        security_code: string;
        card_type: string;
        billing_address: {
          street: string;
          city: string;
          state: string;
          zip_code: string;
        };
    }
    const [creditCards, setCreditCards] = useState<Card[]>([ 
        {
        cardholder_name: "John Doe",
        card_number: "4111111111111111",
        expiry_date: "12/25",
        security_code: "123",
        card_type: "Visa",
        billing_address: {
            street: "123 Elm St",
            city: "Springfield",
            state: "IL",
            zip_code: "62701"
        }
        },
        {
        cardholder_name: "Jane Smith",
        card_number: "5500000000000004",
        expiry_date: "01/29",
        security_code: "321",
        card_type: "MasterCard",
        billing_address: {
            street: "456 Oak St",
            city: "Shelbyville",
            state: "IN",
            zip_code: "46176"
        }
        }
    ]);
  const [editMode, setEditMode] = useState(false);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const handleEdit = (card: Card) => {
    setCurrentCard({...card});
    setEditMode(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('billing_')) {
      const field = name.split('_')[1];
      setCurrentCard(prev => {
        if (!prev) return null;
        const field = name.split('_')[1];
        return {
          ...prev,
          billing_address: {
            ...prev.billing_address,
            [field]: value
          }
        };
      });
    } else {
        setCurrentCard(prev => {
          if (!prev) return null;
          return { ...prev, [name]: value };
        });
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentCard) return;
    const updatedCards = creditCards.map(card => card.card_number === currentCard.card_number ? currentCard : card);
    setCreditCards(updatedCards);
    setEditMode(false);
  };

  return (
    <>
      <div className="col-span-6 xl:col-span-5">
        {creditCards.map((card, index) => (
          <div key={index} className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mb-4">
            <div className="flex justify-between border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Card #{card.card_number.slice(-4)}
              </h3>
              <button onClick={() => handleEdit(card)}>Edit</button>
            </div>
            <div className="p-7">
              <p>Cardholder Name: {card.cardholder_name}</p>
              <p>Expiry Date: {card.expiry_date}</p>
              <p>Card Type: {card.card_type}</p>
              <p>Billing Address: {`${card.billing_address.street}, ${card.billing_address.city}, ${card.billing_address.state}, ${card.billing_address.zip_code}`}</p>
            </div>
          </div>
        ))}
        {editMode && (
            <div className="fixed inset-0 overflow-y-auto h-full w-full flex items-center justify-center" id="my-modal">
                <div className="bg-gray-600 bg-opacity-50 absolute inset-0"></div>
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white bg-opacity-100 z-10">
                    <div className="mt-3 text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Credit Card</h3>
                        <form onSubmit={handleSubmit} className="mt-2">
                            <input type="text" name="cardholder_name" value={currentCard?.cardholder_name} onChange={handleChange} className="mt-2 p-2 border rounded" />
                            <input type="text" name="card_number" value={currentCard?.card_number} onChange={handleChange} className="mt-2 p-2 border rounded" />
                            <input type="text" name="expiry_date" value={currentCard?.expiry_date} onChange={handleChange} className="mt-2 p-2 border rounded" />
                            <input type="text" name="security_code" value={currentCard?.security_code} onChange={handleChange} className="mt-2 p-2 border rounded" />
                            <input type="text" name="card_type" value={currentCard?.card_type} onChange={handleChange} className="mt-2 p-2 border rounded" />
                            <input type="text" name="billing_street" value={currentCard?.billing_address.street} onChange={handleChange} className="mt-2 p-2 border rounded" placeholder="Street" />
                            <input type="text" name="billing_city" value={currentCard?.billing_address.city} onChange={handleChange} className="mt-2 p-2 border rounded" placeholder="City" />
                            <input type="text" name="billing_state" value={currentCard?.billing_address.state} onChange={handleChange} className="mt-2 p-2 border rounded" placeholder="State" />
                            <input type="text" name="billing_zip_code" value={currentCard?.billing_address.zip_code} onChange={handleChange} className="mt-2 p-2 border rounded" placeholder="Zip Code" />
                            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                        </form>
                    </div>
                    <button onClick={() => setEditMode(false)} className="mt-4 bg-red-500 hover:bg-red-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                </div>
            </div>
        )}
      </div>
    </>
  );
};

export default SettingsBilling;