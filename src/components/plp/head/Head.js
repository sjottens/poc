import QuickFilter from "./QuickFilter";

const PlpHead = () => {
	return (
		<section className="plp-head">
            <div className="padded-wrapper">
                <div className="plp-head_left">
                    <h2>Laptop</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut molestie massa. Vivamus eget gravida leo. Ut et aliquam orci. Integer dignissim consectetur interdum. Nunc tortor neque, mattis quis rhoncus ut, consectetur sed orci. Nunc consectetur vulputate eros aliquam suscipit. Vestibulum lorem elit, interdum id iaculis in, convallis vitae enim. Phasellus et neque at augue egestas porttitor a ut sapien.</p>
                </div>
                <QuickFilter/>
            </div>
        </section>
	);
}

export default PlpHead; 