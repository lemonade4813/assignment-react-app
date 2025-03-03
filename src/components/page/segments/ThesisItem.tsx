interface IThesisitem{
    postIndex : number;
    title : string;
    submissionDate : string;
    conferenceName : string;
    type : "A" | "D";
  }

export default function ThesisItem({ postIndex, title, submissionDate, conferenceName, type } : IThesisitem) {
  return (
    <tr>
        <td className="thesis-table-cell">{postIndex}</td>
        <td className="thesis-table-cell">{conferenceName}</td>
        <td className="thesis-table-cell">{title}</td>
        <td className="thesis-table-cell">{submissionDate}</td>
        <td className="thesis-table-cell">{type === 'A' ? '해외' : '국내'}</td>
    </tr>
  )
}
