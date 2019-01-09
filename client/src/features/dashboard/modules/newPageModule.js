import React from 'react';
import CCEnhancedTable from "./../../../utility/enhancedTable/ccEnhancedTable";

const NewPageModule = props => {
  const data = [
    {id: 1, name: "page1"},
    {id: 2, name: "page2"},
    {id: 3, name: "page3"},
  ]

  const fields = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Page ID' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Page Name' }
  ];

  const title="Pages";

  const onDelete = (selected) => {
    console.log(selected);
  }

  return <CCEnhancedTable data={data} fields={fields} title={title} onDelete={onDelete} />;
};

export default NewPageModule;