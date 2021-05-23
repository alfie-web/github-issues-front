import IssuesItemTypes from '../types'

function getContrastYIQ(hexcolor) {
   const parsed = hexcolor.replace('#', '')
   const r = parseInt(parsed.substr(0, 2), 16)
   const g = parseInt(parsed.substr(2, 2), 16)
   const b = parseInt(parsed.substr(4, 2), 16)
   const yiq = (r * 299 + g * 587 + b * 114) / 1000
   return yiq >= 128 ? 'black' : 'white'
}

const IssueLabels = ({ labels }) => {
   return (
      <div className="Issues__item-labels">
         {labels.length
            ? labels.map((l) => (
                 <div
                    key={l.id}
                    className="Issues__item-label"
                    style={{ backgroundColor: `#${l.color}` }}
                 >
                    <span style={{ color: getContrastYIQ(l.color) }}>
                       {l.name}
                    </span>
                 </div>
              ))
            : null}
      </div>
   )
}

IssueLabels.defaultProps = {
   labels: [],
}
IssueLabels.propTypes = {
   labels: IssuesItemTypes.labels,
}

export default IssueLabels
