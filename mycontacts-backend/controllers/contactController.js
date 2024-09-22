//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};


//@desc POST all contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({message:"Contact created"});
}; 

//@desc GET all contacts
//@route GET /api/contacts
//@access public
const singleContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
}; 

//@desc PUT all contacts
//@route PUT /api/contacts
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Contact for ${req.params.id}`});
}; 
//@desc DELETE all contacts
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}`});
}; 



module.exports = {getContact, createContact, singleContact, updateContact, deleteContact};