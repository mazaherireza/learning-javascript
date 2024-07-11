/*
  The UK telephone number format has up to 15 digits, 
  starting with the country code (+44).
  Following this is the National Destination Code (NDC),
  which is 3 or 5 digits that represent the local exchange or area of the caller.
  After this comes the 7-digit Subscriber Number (SN).
*/

const regext = /^(+44)-\d{3, 5}- \d{7}$/;
