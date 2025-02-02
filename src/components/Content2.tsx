 import React from "react";
 
 export default function Content2() {
                              return (
                                <div>
                                   <div className="flex justify-between items-center mb-6 flex-col md:flex-row px-12">
                                      <h2 className="text-2xl font-bold sm
                                      :text-base md:text-lg lg:text-xl">Best of Air Max</h2>
                                      <div className="flex space-x-2">
                                        <button className="px-4 py-2 font-bold rounded-full">Shop</button>
                                        <div className="flex space-x-2 flex-col md:flex-row">
                                          <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold">
                                            ←
                                          </button>
                                          <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
                                            →
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                              )
                            }