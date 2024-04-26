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

  const handleDelete = (cardNumber: string) => {
      const updatedCards = creditCards.filter(card => card.card_number !== cardNumber);
      setCreditCards(updatedCards);
  };

  const handleAddNewCard = () => {
      const newCard: Card = {
          cardholder_name: "",
          card_number: "",
          expiry_date: "",
          security_code: "",
          card_type: "",
          billing_address: {
              street: "",
              city: "",
              state: "",
              zip_code: ""
          }
      };
      setCurrentCard(newCard);
      setEditMode(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCurrentCard(prev => {
          if (!prev) return null;
          if (name.startsWith('billing_')) {
              const field = name.split('_')[1];
              return {
                  ...prev,
                  billing_address: {
                      ...prev.billing_address,
                      [field]: value
                  }
              };
          } else {
              return { ...prev, [name]: value };
          }
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!currentCard) return;
      const updatedCards = currentCard.card_number ? creditCards.map(card => card.card_number === currentCard.card_number ? currentCard : card) : [...creditCards, currentCard];
      setCreditCards(updatedCards);
      setEditMode(false);
  };

  return (
    <>
      <div className="col-span-6 xl:col-span-5 flex justify-end flex-col gap-2">
        <button className="w-1/12 mb-4 bg-green-500 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleAddNewCard}>+</button>
        {creditCards.map((card, index) => (
          <div key={index} className="rounded border-2 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mb-4">
            <div className="flex justify-between border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Card #{card.card_number.slice(-4)}
              </h3>
              <div>
                <button className="mr-2 bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleEdit(card)}>Edit</button>
                <button className="rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 hover:bg-gray-300 dark:border-strokedark dark:text-white" onClick={() => handleDelete(card.card_number)}>Delete</button>
              </div>
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
            <div className="fixed inset-0 overflow-y-auto h-full w-full flex items-start justify-start" id="my-modal">
                <div className="bg-gray-600 bg-opacity-50 absolute inset-0"></div>
                <div className="relative top-30 mx-auto p-5 border-2 border-stroke w-96 shadow-lg rounded-md bg-white dark:bg-boxdark bg-opacity-100 dark:border-strokedark z-10">
                    <div className="mt-3 text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Edit Credit Card</h3>
                        <form onSubmit={handleSubmit} className="mt-2">
                            <input type="text" name="cardholder_name" placeholder="Cardholder Name" value={currentCard?.cardholder_name} onChange={handleChange} className="mb-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                            <input type="text" name="card_number" placeholder="Card Number" value={currentCard?.card_number} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                            <input type="text" name="expiry_date" placeholder="Expiry Date" value={currentCard?.expiry_date} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                            <input type="text" name="security_code" placeholder="Security Code" value={currentCard?.security_code} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                            <input type="text" name="card_type" placeholder="Card Type" value={currentCard?.card_type} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                            <input type="text" name="billing_street" placeholder="Street" value={currentCard?.billing_address.street} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                            <input type="text" name="billing_city" value={currentCard?.billing_address.city} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" placeholder="City" />
                            <input type="text" name="billing_state" value={currentCard?.billing_address.state} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" placeholder="State" />
                            <input type="text" name="billing_zip_code" value={currentCard?.billing_address.zip_code} onChange={handleChange} className="my-2 w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" placeholder="Zip Code" />
                            <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                        </form>
                    </div>
                    <button onClick={() => setEditMode(false)} className="w-full mt-4 bg-red-500 hover:bg-red-700 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                </div>
            </div>
        )}
      </div>
    </>
  );
};

export default SettingsBilling;