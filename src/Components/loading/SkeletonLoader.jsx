
import Skeleton from "react-loading-skeleton"; 
import "react-loading-skeleton/dist/skeleton.css"; 

const SkeletonLoader = () => {
  return (
    <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg animate-pulse">
      <table className="min-w-full border-collapse text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-sm font-semibold text-gray-600">
             
            </th>
            <th className="px-4 py-2 border-b text-sm font-semibold text-gray-600">
             
            </th>
            <th className="px-4 py-2 border-b text-sm font-semibold text-gray-600">
            
            </th>
            <th className="px-4 py-2 border-b text-sm font-semibold text-gray-600">
             
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Skeleton for Table Rows */}
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">
                  <Skeleton circle height={40} width={40} />
                </td>
                <td className="px-4 py-2 border-b">
                  <Skeleton height={20} width={120} />
                </td>
                <td className="px-4 py-2 border-b">
                  <Skeleton height={20} width={80} />
                </td>
                <td className="px-4 py-2 border-b">
                  <Skeleton height={35} width={80} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonLoader;
