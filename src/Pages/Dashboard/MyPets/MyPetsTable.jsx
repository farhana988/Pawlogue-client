/* eslint-disable react/prop-types */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  Edit,
  Trash,
  Check,
  CheckCheck,
} from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.row.index + 1,
    header: () => <span className="flex items-center">Serial Number</span>,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue().slice(0, 20),
    header: () => <span className="flex items-center">Pet Name</span>,
  }),
  columnHelper.accessor("category", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center">Category</span>,
  }),

  columnHelper.accessor("image", {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="pet"
        className="w-16 h-16 object-cover rounded-full"
      />
    ),
    header: () => <span className="flex items-center">Pet Image</span>,
  }),

  columnHelper.accessor("adopted", {
    cell: (info) => (info.getValue() ? "Adopted" : "Not Adopted"),
    header: () => <span className="flex items-center">Adoption Status</span>,
  }),
];

const MyPetsTable = ({ pets }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([...pets]);
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  const currentPageData = data.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const table = useReactTable({
    data: currentPageData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(data.length / pageSize),
  });

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
  };

  const handleDelete = async (petId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axiosSecure.delete(`/pet/${petId}`);

        if (response.data.deletedCount > 0) {
          const updatedPets = data.filter((pet) => pet._id !== petId);
          setData(updatedPets);
          Swal.fire("Deleted!", "Your pet has been deleted.", "success");
        }
      }
    } catch (error) {
      console.error("Error while deleting pet:", error);
      Swal.fire("Error", "An error occurred while deleting the pet.", "error");
    }
  };

  const handleEdit = (petId) => {
    navigate(`/dashboard/updatePet/${petId}`);
  };

  const handleStatus = async (petId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      });
      if (result.isConfirmed) {
        const response = await axiosSecure.patch(`/changeAdopt/${petId}`);
        if (response.data.modifiedCount > 0) {
          const updatedPets = data.map((pet) =>
            pet._id === petId ? { ...pet, adopted: !pet.adopted } : pet
          );
          setData(updatedPets);

          Swal.fire(
            "Success!",
            "You have updated the adoption status.",
            "success"
          );
        }
      }
    } catch (error) {
      console.error("Error deleting adoption info:", error);
      alert("Failed to delete adoption information.");
    }
  };

  return (
    <div>
      {/* Table container */}
      <div
        className="flex flex-col min-h-screen max-w-[420px] md:max-w-[610px] lg:max-w-7xl
       mx-auto px-5 "
      >
        {/*  search */}
        <div className="mb-4 relative">
          <input
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md 
             bg-lCard dark:bg-dCard shadow-sm focus:ring-indigo-500
              focus:border-indigo-500 "
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto  bg-lCard dark:bg-dCard  shadow-md rounded-lg mt-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className=" bg-lCard dark:bg-dCard ">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium
                        uppercase tracking-wider"
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <ArrowUpDown className="ml-2" size={14} />
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className=" bg-lCard dark:bg-dCard  divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-200 dark:hover:bg-zinc-800"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm "
                    >
                      {/* Adjusted row numbering */}
                      {cell.column.id === "id"
                        ? row.index + 1 + pageIndex * pageSize
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </td>
                  ))}
                  {/* action buttons */}

                  <td className="px-6 py-4 whitespace-nowrap text-sm  space-x-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleEdit(row.original._id)}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                      onClick={() => {
                        handleDelete(row.original._id);
                      }}
                    >
                      <Trash size={16} />
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleStatus(row.original._id)}
                    >
                      {row.original.adopted === false ? (
                        <Check size={16} />
                      ) : (
                        <CheckCheck size={16} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        {data.length > pageSize && (
          <div
            className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm
           mb-20"
          >
            <div className="flex items-center space-x-2">
              <button
                className="p-2 rounded-md bg-lCard dark:bg-dCard dark:text-ivory
                 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                onClick={() => handlePageChange(0)}
                disabled={pageIndex === 0}
              >
                <ChevronsLeft size={20} />
              </button>

              <button
                className="p-2 rounded-md bg-lCard dark:bg-dCard dark:text-ivory
                 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                onClick={() => handlePageChange(pageIndex - 1)}
                disabled={pageIndex === 0}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="p-2 rounded-md bg-lCard dark:bg-dCard dark:text-ivory
                 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                onClick={() => handlePageChange(pageIndex + 1)}
                disabled={pageIndex === table.getPageCount() - 1}
              >
                <ChevronRight size={20} />
              </button>

              <button
                className="p-2 rounded-md bg-lCard dark:bg-dCard dark:text-ivory
                 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                onClick={() => handlePageChange(table.getPageCount() - 1)}
                disabled={pageIndex === table.getPageCount() - 1}
              >
                <ChevronsRight size={20} />
              </button>

              {/* Current page number */}
              <span className="ml-2">
                Page {pageIndex + 1} of {table.getPageCount()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPetsTable;
